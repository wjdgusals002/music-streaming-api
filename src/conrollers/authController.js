//회원가입 라우트 작성
const User=require('../models/user')
const jwt=require('jsonwebtoken')

exports.register= async(req,res)=>{
    const {username,password}=req.body;
    try{
        const existingUser= await User.findOne({username});
        if(existingUser) return res.status(400).json({message:"Username already taken"});

        const newUser=new User({username, password});
        await newUser.save();

        const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expirsIn:'1'});
        res.status(201).json({token, user:{id:newUser._id, username:newUser.username}});
    }catch(err){
        res.status(500).json({message:"Error registering user", error:err});
    }
}

//로그인 라우트
exports.login=async(req,res)=>{
    const{username, password}=req.body;
    try{
        const user= await User.findOne({username});
        if(!user) return res.status(400).json({message:"User not found"});

        const isMatch=await user.comparePassword(password)
        if(!isMatch) return res.status(400).json({message:"Password is not matched"});
        
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1H"});
        res.status(200).json({token, user:{id: user._id, username:user.username}});
    }catch(err){
        res.status(500).json({message:"Erroo logging in user",error:err});
    }
}