//스트리밍 라우터

const express=require('express')
const router=express.Router()
const streamController=require('../conrollers/streamController')

router.get('/stream/:Url',streamController.streamSong)

module.exports=router