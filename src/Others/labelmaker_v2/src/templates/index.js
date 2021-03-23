import {
  tablecolumns, dataschema, base64, position, sampledata,
} from './letterpack';
import letterpackPhoto from './letterpack/letterpackPhoto.png';

export default {
  letterpack: {
    columns: tablecolumns,
    dataSchema: dataschema,
    image: base64,
    photo: letterpackPhoto,
    position,
    sampledata,
  },
};
