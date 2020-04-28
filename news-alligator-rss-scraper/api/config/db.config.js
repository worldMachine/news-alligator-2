const mongoose = require("mongoose");
const constants = require("../constants");
const dbURI = constants.MONGO_CONN_STRING;

const options = {
  // reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};
mongoose.set('useFindAndModify', false);

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established.");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
