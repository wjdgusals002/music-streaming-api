//음악 데이터베이스 모델 정의

const mongoose=require('mongoose')

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    year: Number,
    genre: String,
    url: String, //음악파일 url
});

const Song= mongoose.model('Song',songSchema)
module.exports=Song;