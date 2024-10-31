const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all users
router.get('/', productController.getAllProducts);

module.exports = router;