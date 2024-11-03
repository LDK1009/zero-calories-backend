const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllZeroCalorieProducts,
  getAllZeroSugarProducts,
  getAllLowCalorieProducts,
  getAllLowSugarProducts,
  addProduct,
} = require("../controllers/productController");

// Get all users
router.get("/", getAllProducts);

module.exports = router;
