const getCart=(req,res)=>{
  const userId=req.params.userId
  res.send(`Fetching cart for user with id ${userId}`)
}

const postCart=(req,res)=>{
  const userId=req.params.userId
  res.send(`Adding product to the cart for user with id ${userId}`)
}

module.exports={getCart,postCart}
