const { Products } = require('../models');  // Products 모델을 불러옴

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();  // 모든 제품 가져오기
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
