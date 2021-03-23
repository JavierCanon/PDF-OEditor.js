import regexp from '../../utils/regexp';

describe('zipcode', () => {
  test('invalid', () => {
    expect(regexp.zipcode('12345')).toEqual(false);
    expect(regexp.zipcode('１２３４５６７')).toEqual(false);
    expect(regexp.zipcode('1234567')).toEqual(true);
    expect(regexp.zipcode('0123456')).toEqual(true);
    expect(regexp.zipcode(null)).toEqual(false);
    expect(regexp.zipcode('')).toEqual(false);
    expect(regexp.zipcode()).toEqual(false);
  });
});
