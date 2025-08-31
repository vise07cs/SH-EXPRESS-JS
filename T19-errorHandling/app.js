// server.js
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const cartRoutes=require("./routes/cartRoute")
const userRoutes=require("./routes/userRoute")



app.use(express.static("public"));
app.use(express.json())

app.use(express.json()); // for parsing JSON bodies
app.use("/products", productRoutes);

app.use("/cart",cartRoutes)
app.use("/user",userRoutes)


const PORT = 3021;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
