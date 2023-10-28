const Exception = require("../exceptions/customeException");

module.exports = {
  getCustomErrorException: function (errMsg, error) {
    return new Exception(1, errMsg, error);
  },
};
