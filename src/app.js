const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()

const app=express();
const PORT=process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI,{
    userNewUrlParser:true,
    userUnifiedTopology:true,
}).then(()=>{
    console.log('connected to MongoDB');
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

//라우터 추가
const authRoutes=require('./routes/authRoutes')

app.user('/api/auth',authRoutes)