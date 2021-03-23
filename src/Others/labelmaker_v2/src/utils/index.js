export default {
  zenkaku2hankaku(val) {
    if (typeof val !== 'string') return val;
    const regex = /[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g;
    return val
      .replace(regex, s => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
      .replace(/[‐－―−]/g, '-') // ハイフンなど
      .replace(/[～〜]/g, '~') // チルダ
      // スペース;
      .replace(/　/g, ' '); // eslint-disable-line 
  },
  splitByLength(str, length) {
    if (!str || !length || length < 1) {
      return [];
    }
    const regexPattern = new RegExp(
      `(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]){1,${length}}`,
      'g',
    );

    return str.match(regexPattern) || [];
  },
};
