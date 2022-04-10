const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const config = require("./config.json");
const routes = require("./routes/user.routes");
const cors = require("cors");
const app = express();

// middleware
// ---------------------------
// app.use(express.static(__dirname + "/public"));
app.use(express.json()).use(cors()).use(routes);
// application configuration
// --------------------------------------
let errorHandler = (err) => console.log("Error: ", err);

// DB configuration
// ---------------------------
const URL = config.cloudDB;

// ORM

mongoose
  .connect(URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => errorHandler(err));

//port
app.listen(config.port, config.host, (err) => {
  if (err) {
    errorHandler(err);
  } else {
    console.log("Server is live on http://localhost:5050");
  }
});
