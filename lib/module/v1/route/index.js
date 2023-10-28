var express = require("express");
var router = express.Router();

const userRoute = require("../user/routes");

router.use("/users", userRoute);

module.exports = router;
