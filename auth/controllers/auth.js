const express = require('express')
const bcrypt = require('bcrypt');
const UserService = require('../services/user');
const router = express.Router();
require("dotenv").config()


router.get("/",(req,res)=>{
  res.set('user', JSON.stringify(req.user));
  res.send({message:"success from auth only accessible by auth"})
})

router.post("/login",async (req, res) => {
    const {email,password} = req.body
    const token = await UserService.login(email,password)
    res.send({ token });
  }
  )

module.exports = router

