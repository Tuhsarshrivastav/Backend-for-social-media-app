const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const post = require("./routes/postRoute");

// Using routes
app.use("/api/v1/", post);
module.exports = app;
