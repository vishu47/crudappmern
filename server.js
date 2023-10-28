console.log("------Starting Reto Cars----------");
console.log("Starting Date :", new Date());
const connectDB = require("./lib/config/db");
//.env file read
require('dotenv').config({ debug: process.env.DEBUG });

// constant
const PORT = 4001;

const express = require("express");
const resTime = require("response-time");
const config = require("./lib/config");

const app = express(resTime);

// apply express configuration
config.expressConfig(app);

// connect with mongodb
connectDB();

// attach the routes to the app
require("./lib/routes")(app);

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
