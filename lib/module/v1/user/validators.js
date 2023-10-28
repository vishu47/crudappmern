const _ = require("lodash");
const constant = require("../../../constant");
const exceptions = require("../../../exceptions");
const jwt = require("jsonwebtoken");

const create = (req, res, next) => {
  const { title, email, category, availability } = req.body;
  console.log(req.body, "body");
  let errors = [];

  if (_.isEmpty(title)) {
    errors.push({
      error: "title",
      message: constant.message.KEY_EMPTY.replace("{{$key}}", "title"),
    });
  }
  if (_.isEmpty(email)) {
    errors.push({
      error: "email",
      message: constant.message.KEY_EMPTY.replace("{{$key}}", "email"),
    });
  }
  if (_.isEmpty(category)) {
    errors.push({
      error: "category",
      message: constant.message.KEY_EMPTY.replace("{{$key}}", "category"),
    });
  }

  if (errors && errors.length > 0) {
    const result = { err: [...errors] };
    return res.send(result);
  }

  req.data = { title, email, category, availability };
  next();
};

module.exports = {
  create,
};
