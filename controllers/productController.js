const { Product, Nutritional } = require("../models");

//////////////////////////////////////////////////GET//////////////////////////////////////////////////

// 모든 상품 가져오기
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Nutritional,
          as: "Nutritional", // 관계 설정의 as와 일치해야 함
        },
      ],
    });
    res.status(200).json(products);
    res.status(200).json(products);
  } catch (error) {
    next(error); // 에러를 다음 미들웨어(에러 핸들러)로 전파
  }
};

// 모든 Zero 칼로리 상품 가져오기
const getAllZeroCalorieProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
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
    const products = await Product.findAll({
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
    const products = await Product.findAll({
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
    const products = await Product.findAll({
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
  console.log("데이터 추가");
  try {
    const { name, link, src, major_category, middle_category } = req.body; // 상품 정보
    const { carbohydrate, protein, fat } = req.body; // 상품 영양소 정보

    // 새 상품을 생성하고 데이터베이스에 저장
    const newProduct = await Product.create({
      name,
      link,
      src,
      major_category,
      middle_category,
    });

    // 생성된 Product의 id를 사용하여 Nutritional 생성
    const newNutritional = await Nutritional.create({
      productId: newProduct.id, // 외래키로 Product의 id 사용
      carbohydrate,
      protein,
      fat,
    });

    res.status(201).json({ product: newProduct, nutritional: newNutritional });
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
