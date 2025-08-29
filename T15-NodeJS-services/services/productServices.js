// services/productService.js

// Dummy Product List

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 2000 }
];

// Get all products
const getAllProducts = () => {
  return products;
};

// Get sproduct by ID
const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Add new product
const addProduct = (product) => {
  const newProduct = { id: products.length + 1, ...product };
  products.push(newProduct);
  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};
