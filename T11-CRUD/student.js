const express=require("express");

const router=express.Router();


const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];



router.get("/",(req,res)=>{

    console.log("get / working");
  const names = students.map(val => val.name);
  res.send({ students: names });

  // let names=[]
  // console.log("get / working")
  // for(let val of students){
  //   names.push(val.name)

  // }
  //       res.send(`Students:${names}`)


})


router.get("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const studentName=students.find(s=>s.id===id)

    if(studentName){
      res.send(`<h1>Student:${studentName.name}</h1>`)
    }
    else{
      res.status(404).send("Student not found")
    }

 

})

module.exports=router;