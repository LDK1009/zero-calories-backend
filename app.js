const express = require('express');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes'); // routes/index.js를 불러옴 ////////


const app = express();
app.use(express.json());

// API 라우트를 설정합니다.
app.use('/', routes); ////////

// API Route
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));
