const getUsers=(req,res)=>{
  res.send(`Fetching all users`)
}

const postUsers=(req,res)=>{
  res.send(`Adding a new user`)
}

const getUsersById=(req,res)=>{
  const id=req.params.id;
  res.send(`Fetching user with id ${id}`)
}


module.exports={getUsers,postUsers,getUsersById}

