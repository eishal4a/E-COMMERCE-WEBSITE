const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://dubai:freshlyfreshfoodtrading@cluster0.w9lzdxz.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0")

app.get("/", (req, res) => {
  res.send("Express is running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
