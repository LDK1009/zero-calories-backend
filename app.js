const express = require("express");
const { sequelize } = require("./models"); // Sequelize ORM
const dotenv = require("dotenv");
dotenv.config(); // .env 파일의 환경 변수를 불러와 process.env로 사용할 수 있게 설정
const routes = require("./routes"); // 라우팅 index.js
const errorHandler = require("./middlewares/errorHandler"); // 에러 핸들링 미들웨어
const cors = require("cors");


const app = express(); // Express 앱 인스턴스 생성

// 모든 출처에서의 요청 허용
app.use(cors());

// 특정 출처만 허용
// app.use(cors({ origin: "http://localhost:3000" }));

// json 데이터를 파싱할 수 있도록 설정 (요청 본문에서 JSON 데이터를 다룰 수 있음)
app.use(express.json());

// 에러 핸들링 미들웨어 등록 (라우터 설정 후에 추가하여, 라우터에서 발생한 모든 오류를 처리)
app.use(errorHandler);

// API 라우트를 설정합니다. ('/' 경로로 접근하는 모든 요청을 routes로 처리)
app.use("/", routes);

// 서버 포트를 설정 (환경 변수 PORT 값을 사용하거나 기본값으로 3000번 포트를 사용)
const PORT = process.env.PORT || 3000;

// 데이터베이스 연결 및 서버 시작
sequelize
  .sync() // Sequelize 모델을 데이터베이스와 동기화
  .then(() => {
    console.log("Database connected!"); // 데이터베이스 연결 성공 시 로그 출력
    app.listen(PORT, () => {
      // 서버를 지정한 포트에서 시작
      console.log(`Server is running on port ${PORT}`); // 서버가 정상적으로 실행 중임을 알리는 로그 출력
    });
  })
  .catch((err) => console.log("Error: " + err)); // 데이터베이스 연결 실패 시 오류 출력
