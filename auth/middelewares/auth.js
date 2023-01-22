const jwt = require('jsonwebtoken');
require("dotenv").config()

const authMiddleware = (req, res, next) => {
  if(req.url === "/"){
    try {
      // Get the token from the headers
  const token = req.headers.authorization.split(' ')[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_EKY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Invalid token' });
  }
  }
  else{
    next()
  }
 
};

module.exports = authMiddleware;
