//modules
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./api/routes");

const app = express();
const port = process.env.PORT || 3000;

//connect to database
require("./api/config/db.config");

require("./api/services/scheduler.service");
// require('./api/services/feed-sub.service')

//Attach middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//Enter Router
app.use("/api", router);

//Start listening
app.listen(port, () => {
  console.log("news alligator RSS Scraper started on: " + port);
});

module.exports = app;
