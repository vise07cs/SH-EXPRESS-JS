// server.js
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");


app.use(express.static("public"));
app.use(express.json())

app.use(express.json()); // for parsing JSON bodies
app.use("/products", productRoutes);

const PORT = 3021;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
