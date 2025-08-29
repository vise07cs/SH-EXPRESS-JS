// server.js
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json()); // for parsing JSON bodies
app.use("/products", productRoutes);

const PORT = 3017;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
