const path=require("path");




const getProducts=(req,res)=>{
  res.sendFile(path.join(__dirname,"..","view","product.html"))
}


const getProductsById=(req,res)=>{
  let id=req.params.id;
  res.send(`Fetching products with id ${id}`)
}


const postProduct=(req,res)=>{
  res.send(`Adding a new product`)
}

const putProduct=(req,res)=>{
    let id=req.params.id;

  res.send(`Put request sent for ${id}`)
}

const deleteProduct=(req,res)=>{
    let id=req.params.id;
  res.send(`Delete request sent for ${id}`)
}



module.exports={getProducts,getProductsById,postProduct,putProduct,deleteProduct}
