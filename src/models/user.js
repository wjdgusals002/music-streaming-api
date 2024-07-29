//사용자 모델 정의 

const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
}); 

//비밀번호 해싱
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    try{
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password, salt);
        next();
    }catch(err){
        next(err);
    }
});

userSchema.methods.comparePassword=async function(cadidatePassword){
    return await bcrypt.compare(cadidatePassword,this.password);
};

module.exports=mongoose.model('User',userSchema);