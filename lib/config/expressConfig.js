const bodyParser = require("body-parser"); // parses information from POST

module.exports = (app) => {
  // parses application/json bodies
  app.use(bodyParser.json());
  // Middleware to parse URL-encoded data
  app.use(bodyParser.urlencoded({ extended: true }));

  /*
   * all api request it would remove cors errors
   */
  app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Credentials", true);
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken"
    );
    response.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    next();
  });
};
