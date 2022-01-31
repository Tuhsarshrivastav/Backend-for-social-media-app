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
const user = require("./routes/userRoute");

// Using routes
app.use("/api/v1/", post);
app.use("/api/v1/", user);

module.exports = app;
