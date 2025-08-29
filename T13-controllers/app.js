const express=require("express");
const app=express()

const userRoute=require("./userRoute")
const productRoute=require("./productRoute")
const cartRoute=require("./cartRoute")


app.use("/users",userRoute)
app.use("/products",productRoute)
app.use("/cart",cartRoute)



app.listen(3015,()=>{
  console.log("Server running on 3015")
})