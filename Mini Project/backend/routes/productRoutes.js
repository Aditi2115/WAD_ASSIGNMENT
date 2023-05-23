const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET all products
router.get("/products", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json({ error: err }));
});

// POST a new product
router.post("/products", (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const newProduct = new Product({ name, description, price, imageUrl });

  newProduct
    .save()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
