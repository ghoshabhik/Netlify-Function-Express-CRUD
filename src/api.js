const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = require("./config").mlabURI;

//Bring in Router: items
const items = require("./routes/items");

//Creaete MLab Connection
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error occurred");
  });

app.use("/.netlify/functions/api", items);

module.exports.handler = serverless(app);
