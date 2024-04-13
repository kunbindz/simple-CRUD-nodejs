const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", getProducts);

//get 1 product
router.get("/:id", getProduct);

//post 1 product
router.post("/", postProduct);

//update a product
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
