//라우터를 정의

const express=require('express')
const router=express.Router()
const{register, login}=require('../conrollers/authController')

router.post('/register',register)
router.post('/login',login)

module.exports=router