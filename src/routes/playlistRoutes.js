//플레이리스트 api 엔드포인트
const express=require('express')
const router= express.Router()
const playlistRouter=require('../conrollers/playlistController')
const authMiddleware=require('../middleware/auth') //사용자 인증 미들웨어

//인증된 사용자만 접근할 수 있도록 미들웨어 사용
router.use(authMiddleware)

//플레이리스트 생성
router.post('/',playlistController.createPlaylist)

//플레이리스트에 곡 추가
router.post('/add',playlistController.addSongPlaylist)

//플레이리스트 곡 조회
router.get('/',playlistController.getUserPlaylist)

//플레이리스트에 곡 삭제
router.post('/remove',playlistController.deleteFromPlaylist)

module.exports=router
