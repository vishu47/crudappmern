const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  let aToken;
  aToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
  return aToken;
};
const generateRefreshToken = (user) => {
  let rToken;
  rToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  return rToken;
};

const loginUser = async (data, params) => {
  console.log(data, params, "loginUser");
  // generate credentials
  let result;
  if (await bcrypt.compare(params.password, data.password)) {
    let accessToken = generateAccessToken({ user: data.username });
    let refreshToken = generateRefreshToken({ user: data.username });
    result = { accessToken: accessToken, refreshToken: refreshToken };
  }

  result["username"] = data.username;
  return result;
};

module.exports = {
  loginUser,
};
