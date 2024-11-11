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
router.get("/zero-calories", getAllZeroCalorieProducts);
router.get("/zero-sugar", getAllZeroSugarProducts);
router.get("/low-calories", getAllLowCalorieProducts);
router.get("/low-sugar", getAllLowSugarProducts);

router.post("/", addProduct);

module.exports = router;
