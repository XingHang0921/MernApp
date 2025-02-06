const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/product_model.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", function (req, res) {
  res.send("Hello World test thundersadasd");
});

app.get("/api/products", async function (req, res) {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/product/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async function (req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/product/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});

app.delete("/api/product/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product successfully deleted"});
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});

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
