/* global describe, it, jsPDF, comparePdf */
/**
 * Standard spec tests
 *
 * These tests return the datauristring so that reference files can be generated.
 * We compare the exact output.
 */

describe("Module: Outline", () => {
  beforeAll(loadGlobals);
  it("should create a bookmark in a pdf generated with units in points", () => {
    var doc = new jsPDF({ unit: "pt", floatPrecision: 2 });
    doc.outline.add(null, "Page 1", { pageNumber: 1 });
    doc.addPage();

    comparePdf(doc.output(), "bookmark-pt.pdf", "outline");
  });

  // @TODO: Document
  it("should create a bookmark in a pdf generated with units in inches", () => {
    var doc = new jsPDF({ unit: "in", floatPrecision: 2 });
    doc.outline.add(null, "Page 1", { pageNumber: 1 });
    doc.addPage();

    comparePdf(doc.output(), "bookmark-in.pdf", "outline");
  });

  // @TODO: Document
  it("should create a bookmark in a pdf generated with units in mm", () => {
    var doc = new jsPDF({ unit: "mm", floatPrecision: 2 });
    doc.outline.add(null, "Page 1", { pageNumber: 1 });
    doc.addPage();

    comparePdf(doc.output(), "bookmark-mm.pdf", "outline");
  });

  // @TODO: Document
});
