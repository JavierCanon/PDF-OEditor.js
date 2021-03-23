import regexp from '../../utils/regexp';

const zipVaridator = (value, callback) => (value === '' || (value.toString && regexp.zipcode(value.toString())) ? callback(true) : callback(false));

export default [
  {
    title: '[To]郵便番号',
    data: 'to_zip',
    type: 'text',
    validator: zipVaridator,
  },
  {
    title: '[To]おところ',
    data: 'to_add',
    type: 'text',
  },
  {
    title: '[To]おなまえ',
    data: 'to_name',
    type: 'text',
  },
  {
    title: '[To]電話番号',
    data: 'to_tel',
    type: 'text',
  },
  {
    title: '[From]郵便番号',
    data: 'from_zip',
    type: 'text',
    validator: zipVaridator,
  },
  {
    title: '[From]おところ',
    data: 'from_add',
    type: 'text',
  },
  {
    title: '[From]おなまえ',
    data: 'from_name',
    type: 'text',
  },
  {
    title: '[From]電話番号',
    data: 'from_tel',
    type: 'text',
  },
  {
    title: '品名',
    data: 'desc',
    type: 'text',
  },
];
