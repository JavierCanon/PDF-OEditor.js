export default {
  zipcode(zipcode) {
    if (zipcode && (zipcode.match(/^\d{7}$/))) {
      return true;
    } return false;
  },
};
