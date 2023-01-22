const express = require('express')
const router = express.Router();


router.get("/",(req,res)=>{
  res.send({message:"success from user only accessible by auth"})
})


module.exports = router

