// controllers/productController.js
const productService = require("../services/productServices");

// Get all products
const getProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json({ message: "Fetching all products", data: products });
};

// Get product by ID
const getProduct = (req, res) => {
  const product = productService.getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: `Fetching product with ID: ${req.params.id}`, data: product });
};

// Add product
const createProduct = (req, res) => {
  const newProduct = productService.addProduct(req.body);
  res.status(201).json({ message: "Adding a new product", data: newProduct });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct
};
