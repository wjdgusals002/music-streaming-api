//스트리밍 api 구현

const path= require('path')
const fs= require('fs')

//음악 스트리밍
exports.streamSong= (req,res)=>{
    const songUrl =req.params.url //url 파라미터에서 url를 가져오기
    const songPath= path.join(__dirname,'../music',songUrl); //음악 파일 경로 설정

    fs.stat(songPath,(err,stats)=>{
        if(err){
            return res.status(404).json({error:'Song not found'})
        }

        res.writeHead(200,{
            'Content-Type':'audio/mpeg',
            'Content-Length':stats.size,
        })

        const readStream= fs.createReadStream(songPath)
        readStream.pipe(res)
    })
}