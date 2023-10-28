const v1Routes = require("../module/v1/route/index");

module.exports = (app) => {
  app.use("/api/v1", v1Routes);
};


