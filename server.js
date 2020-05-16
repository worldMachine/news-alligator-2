//modules
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./api/routes");
var cors = require("cors");

const app = express();
// const port = process.env.PORT || 8080;

app.use(cors());

//connect to database
require("./api/config/db.config");

// require('./api/services/scheduler.service')
// require("./api/services/feed-sub.service");

//Attach middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//Enter Router
app.use("/api", router);

//Start listening
app.listen(5000, () => {
  console.log("news alligator rest api started on: 5000");
});

module.exports = app;
