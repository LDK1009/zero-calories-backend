const { Products } = require("../models");

//////////////////////////////////////////////////GET//////////////////////////////////////////////////
// 모든 상품 가져오기
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error); // 에러를 다음 미들웨어(에러 핸들러)로 전파
  }
};

// 모든 Zero 칼로리 상품 가져오기
const getAllZeroCalorieProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll({
      where: { major_category: "zeroCalorie" },
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// 모든 Zero 슈가 상품 가져오기
const getAllZeroSugarProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll({
      where: { major_category: "zeroSugar" },
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// 모든 Low 칼로리 상품 가져오기
const getAllLowCalorieProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll({
      where: { major_category: "lowCalorie" },
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// 모든 Low 슈가 상품 가져오기
const getAllLowSugarProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll({
      where: { major_category: "lowSugar" },
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

//////////////////////////////////////////////////POST//////////////////////////////////////////////////
// 상품 추가하기
const addProduct = async (req, res, next) => {
  try {
    const { name, link, src, major_category, middle_category } = req.body; // 클라이언트에서 받은 상품 데이터

    // 새 상품을 생성하고 데이터베이스에 저장
    const newProduct = await Products.create({
      name,
      price,
      major_category,
      description,
    });

    res.status(201).json(newProduct); // 생성된 상품 정보를 응답으로 반환
  } catch (error) {
    next(error); // 에러 발생 시 다음 미들웨어로 전파
  }
};

module.exports = {
  getAllProducts,
  getAllZeroCalorieProducts,
  getAllZeroSugarProducts,
  getAllLowCalorieProducts,
  getAllLowSugarProducts,
  addProduct,
};
