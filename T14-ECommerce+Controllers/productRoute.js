const express=require("express");
const router=express.Router();
const productController=require("./controllers/productController")



router.get("/",productController.getProducts)

router.post("/",productController.postProduct)


router.get("/:id",productController.getProductsById)

router.put("/:id",productController.putProduct)

router.delete("/:id",productController.deleteProduct)

module.exports=router;