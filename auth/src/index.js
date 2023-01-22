const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('../middelewares/auth');
const authController = require("../controllers/auth")
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))


 app.use(bodyParser.json());
app.use('/api/v1/auth',authMiddleware, authController);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
