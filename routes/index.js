const express = require('express');
const router = express.Router();

// 여기서 다른 라우터 파일들을 불러옵니다.
const productRoutes = require('./product'); // products 관련 라우터
// const exampleRoutes = require('./user');


// 라우터를 설정합니다.
router.use('/product', productRoutes);

// 다른 엔드포인트들도 여기에 추가할 수 있습니다.
// ex) 
// router.use('/example', userRoutes);

module.exports = router;
