//검색 API 음악 검색

const Song=require('../models/Song')

//검색기능
exports.searchSongs= async(req, res)=>{
    try{
        const{query}=req.query;
        const songs= await Song.find({title:new RegExp(query,i)});
        res.json(songs);
    }catch(err){
        res.status(500).json({error:error.message});
    }
};