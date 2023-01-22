const express = require('express');
const app = express();
const userController = require("../controllers/user")

//  use body parser
app.use(bodyParser.json());

app.use("/api/v1/users",userController)

app.listen(3001, () => {
  console.log('Server started on port 3000');
});
