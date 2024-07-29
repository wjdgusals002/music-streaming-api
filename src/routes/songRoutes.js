//음악 검색 기능 라우터
const express=require('express')
const router=express.Router();
const songController= require('../conrollers/songController')

router.get('/search',songController.searchSongs)

module.exports=router