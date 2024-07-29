//플레이리스트 CRUD 기능

const Playlist=require('../models/Playlist')

//플레이 리스트 생성
exports.createePlaylist= async(req,res)=>{
    try{
        const {name}= req.body;
        const newPlaylist= new Playlist({
            name,
            userId: req.user._id,
        });
        await newPlaylist.save()
        res.status(201).json(newPlaylist)
    }catch(err){
        res.status(500).json({error:error.message})
    }
}

//플레이리스트에 곡 추가
exports.addSongPlaylist= async(req, res)=>{
    try{
        const {playlistId, songId} =req.body
        const playlist= await Playlist.findById(playlistId)
        if(!playlist){
            return res.status(404).json({error:'Playlist is not found'})
        }
        playlist.songs.push(songId)
        await playlist.save();
        res.json(playlist)
    }catch(err){
        res.status(500).json({error: error.message})
    }
}

//플레이리스트 조회
exports.getUserPlaylists= async(req, res)=>{
    try{
        const playlist=await Playlist.find({userId:req.user._id})
        res.json(playlist)
    }catch(err){
        res.status(500).json({error:error.message})
    }
}

//플레이리스트에서 삭제
exports.deleteFromPlaylists=async(req,res)=>{
    try{
        const{playlistId,songId}=req.body
        const playlist=await Playlist.findById(playlistId)
        if(!playlist){
            return res.status(404).json({error:'Playlist is not found'})
        }
        playlist.songs=playlist.songs.filter(id=>id.toString() !==songId)
        await playlist.save()
        res.json(playlist)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}