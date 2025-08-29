
const express=require("express");

const router=express.Router();



const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }


];


router.get("/",(req,res)=>{
  let courseName=courses.map((val)=>val.name)
  res.send({courses:courseName})
})


router.get("/:id",(req,res)=>{

  const id=parseInt(req.params.id)
  let courseName=courses.find(c=>c.id===id)

  if(courseName){
    res.send(`<h1>Course:${courseName.name},${courseName.description}</h1>`)
  }
  else{
     res.status(404).send("<h1>Course not found</h1>")

  }
})

module.exports=router;
