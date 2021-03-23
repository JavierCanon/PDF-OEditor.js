import {
  PDFFont,
  PDFImage,
  PDFDocument,
  PDFEmbeddedPage,
  rgb,
  degrees,
  setCharacterSpacing,
  StandardFonts,
} from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { createBarCode } from "./barcode";
import { Args, isPageSize, isSubsetFont } from "./type";

const barcodes = [
  "qrcode",
  "ean13",
  "ean8",
  "japanpost",
  "code39",
  "code128",
  "nw7",
  "itf14",
  "upca",
  "upce",
];

const uniq = <T>(array: Array<T>) => Array.from(new Set(array));

const hex2rgb = (hex: string) => {
  if (hex.slice(0, 1) == "#") hex = hex.slice(1);
  if (hex.length == 3)
    hex =
      hex.slice(0, 1) +
      hex.slice(0, 1) +
      hex.slice(1, 2) +
      hex.slice(1, 2) +
      hex.slice(2, 3) +
      hex.slice(2, 3);

  return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) =>
    parseInt(str, 16)
  );
};

const mm2pt = (mm: number): number => {
  // https://www.ddc.co.jp/words/archives/20090701114500.html
  const ptRatio = 2.8346;
  return parseFloat(String(mm)) * ptRatio;
};

const calcX = (
  x: number,
  alignment: "left" | "right" | "center",
  boxWidth: number,
  textWidth: number
) => {
  let addition = 0;
  if (alignment === "center") {
    addition = (boxWidth - textWidth) / 2;
  } else if (alignment === "right") {
    addition = boxWidth - textWidth;
  }
  return mm2pt(x) + addition;
};

const calcY = (y: number, height: number, itemHeight: number) =>
  height - mm2pt(y) - itemHeight;

const labelmake = async ({ inputs, template, font }: Args) => {
  if (inputs.length < 1) {
    throw Error("inputs should be more than one length");
  }

  const fontNamesInSchemas = uniq(
    template.schemas
      .map((s) => Object.values(s).map((v) => v.fontName))
      .reduce((acc, val) => acc.concat(val), [] as (string | undefined)[])
      .filter(Boolean) as string[]
  );

  if (font) {
    const fontNames = Object.keys(font);
    if (template.fontName && !fontNames.includes(template.fontName)) {
      throw Error(
        `${template.fontName} of template.fontName is not found in font`
      );
    }
    if (fontNamesInSchemas.some((f) => !fontNames.includes(f))) {
      throw Error(
        `${fontNamesInSchemas
          .filter((f) => !fontNames.includes(f))
          .join()} of template.schemas is not found in font`
      );
    }
  }

  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);
  const isUseMyfont =
    font && (template.fontName || fontNamesInSchemas.length > 0);
  const fontValues = isUseMyfont
    ? await Promise.all(
        Object.values(font!).map((v) =>
          pdfDoc.embedFont(isSubsetFont(v) ? v.data : v, {
            subset: isSubsetFont(v) ? v.subset : true,
          })
        )
      )
    : [];
  const fontObj = isUseMyfont
    ? Object.keys(font!).reduce(
        (acc, cur, i) => Object.assign(acc, { [cur]: fontValues[i] }),
        {} as { [key: string]: PDFFont }
      )
    : {
        [StandardFonts.Helvetica]: await pdfDoc.embedFont(
          StandardFonts.Helvetica
        ),
      };

  const inputImageCache: { [key: string]: PDFImage } = {};
  const { basePdf, schemas } = template;
  const isBlank = isPageSize(basePdf);
  let embeddedPages: PDFEmbeddedPage[] = [];
  if (!isPageSize(basePdf)) {
    const embedPdf = await PDFDocument.load(basePdf);
    embeddedPages = await pdfDoc.embedPdf(embedPdf, embedPdf.getPageIndices());
  }
  for (let i = 0; i < inputs.length; i++) {
    const inputObj = inputs[i];
    const keys = Object.keys(inputObj);
    for (let j = 0; j < (isBlank ? schemas : embeddedPages).length; j++) {
      const pageWidth = isPageSize(basePdf)
        ? mm2pt(basePdf.width)
        : embeddedPages[j].width;
      const pageHeight = isPageSize(basePdf)
        ? mm2pt(basePdf.height)
        : embeddedPages[j].height;
      const page = pdfDoc.addPage([pageWidth, pageHeight]);
      if (!isBlank) page.drawPage(embeddedPages[j]);
      if (!schemas[j]) continue;
      for (let l = 0; l < keys.length; l++) {
        const key = keys[l];
        const schema = schemas[j][key];
        const input = inputObj[key];
        if (!schema || !input) continue;
        const rotate = degrees(schema.rotate ? schema.rotate : 0);
        const boxWidth = mm2pt(schema.width);
        const boxHeight = mm2pt(schema.height);
        if (schema.type === "text") {
          if (schema.backgroundColor) {
            const [br, bg, bb] = hex2rgb(schema.backgroundColor);
            page.drawRectangle({
              x: calcX(schema.position.x, "left", boxWidth, boxWidth),
              y: calcY(schema.position.y, pageHeight, boxHeight),
              width: boxWidth,
              height: boxHeight,
              color: rgb(br / 255, bg / 255, bb / 255),
            });
          }

          const fontValue = isUseMyfont
            ? fontObj[schema.fontName ? schema.fontName : template.fontName!]
            : fontObj[StandardFonts.Helvetica];
          const [r, g, b] = hex2rgb(
            schema.fontColor ? schema.fontColor : "#000"
          );
          const fontSize = schema.fontSize ? schema.fontSize : 13;
          const alignment = schema.alignment ? schema.alignment : "left";
          const lineHeight = schema.lineHeight ? schema.lineHeight : 1;
          const characterSpacing = schema.characterSpacing
            ? schema.characterSpacing
            : 0;
          page.pushOperators(setCharacterSpacing(characterSpacing));

          let beforeLineOver = 0;

          input.split(/\r|\n|\r\n/g).forEach((inputLine, index) => {
            // TODO UNIT TEST
            const getSplit = (il: string, stack: string[] = []): string[] => {
              let skip = false;
              const splited = il.split("").reduce((acc, cur) => {
                const isOver =
                  fontValue.widthOfTextAtSize(acc + cur, fontSize) > boxWidth;
                let result = "";
                if (isOver || skip) {
                  skip = true;
                  result = acc;
                } else {
                  result = acc + cur;
                }
                return result;
              }, "");
              if (splited.length === 0) return stack;
              const next = stack.concat(splited);
              const nextLength = next.join("").length;
              return getSplit(inputLine.substring(nextLength), next);
            };
            const splitedLine = getSplit(inputLine);
            splitedLine.forEach((inputLine2, index2) => {
              const textWidth = fontValue.widthOfTextAtSize(
                inputLine2,
                fontSize
              );
              page.drawText(inputLine2, {
                x: calcX(schema.position.x, alignment, boxWidth, textWidth),
                y:
                  calcY(schema.position.y, pageHeight, fontSize) -
                  lineHeight * fontSize * (index + index2 + beforeLineOver) -
                  (lineHeight === 0 ? 0 : ((lineHeight - 1) * fontSize) / 2),
                rotate: rotate,
                size: fontSize,
                lineHeight: lineHeight * fontSize,
                maxWidth: boxWidth,
                font: fontValue,
                color: rgb(r / 255, g / 255, b / 255),
                wordBreaks: [""],
              });
              if (splitedLine.length === index2 + 1) beforeLineOver += index2;
            });
          });
        } else if (barcodes.includes(schema.type) || schema.type === "image") {
          const opt = {
            x: calcX(schema.position.x, "left", boxWidth, boxWidth),
            y: calcY(schema.position.y, pageHeight, boxHeight),
            rotate: rotate,
            width: boxWidth,
            height: boxHeight,
          };
          const inputImageCacheKey = `${schema.type}${input}`;
          let image = inputImageCache[inputImageCacheKey];
          if (!image && schema.type === "image") {
            const isPng = input.startsWith("data:image/png;");
            image = await pdfDoc[isPng ? "embedPng" : "embedJpg"](input);
          } else if (!image && schema.type !== "image") {
            const imageBuf = await createBarCode({
              type: schema.type,
              width: schema.width,
              height: schema.height,
              input,
            });
            if (imageBuf) {
              image = await pdfDoc.embedPng(imageBuf);
            }
          }
          if (image) {
            inputImageCache[inputImageCacheKey] = image;
            page.drawImage(image, opt);
          }
        }
      }
    }
  }
  return await pdfDoc.save();
};

export default labelmake;
