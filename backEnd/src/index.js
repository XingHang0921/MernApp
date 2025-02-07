const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("../routes/productRoute.js");
const dotenv = require("dotenv")

dotenv.config();
const PORT = process.env.PORT

app.get("/", function (req, res) {
  res.send("Hello World test");
});

//routes
app.use("/api/products", productRoute);

//establish localhost
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

//establish MongoDB connection
mongoose
  .connect(
    "mongodb+srv://nevinzheng:Nevin0921@cluster0.hrapi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to Mongoose!");
  })
  .catch(() => {
    console.log("Failed to connect to Mongoose");
  });
