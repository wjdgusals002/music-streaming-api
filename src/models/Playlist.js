//플레이리스트 DB 생성

const mongoose=require('mongoose')

const playlistSchema= new mongoose.Schema({
    name:{type:String, required: true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true},
    songs: [{type:mongoose.Schema.Types.ObjectId,ref:'Song'}],
    createAt:{type:Date,default:Date.now}
});

const Playlist= mongoose.model('Playlist',playlistSchema)
module.exports=Playlist