const express=require("express");
const app=express()

const studentRoute=require("./student")
const courseRoute=require("./course")




app.get("/",(req,res)=>{
  res.send("<h1> Welcome to the student and course portal API")

})


app.use("/students",studentRoute)



app.use("/courses",courseRoute)



app.listen(3012,()=>{
  console.log("Srver setup success on port 3012")
})