import mongoose  from "mongoose";

const authSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true,
    
},
email:{
     type:String,
     required:true,
     unique:true
    
}, 
    password:{
        type:String,
        required:true,
    },
    isverified:{
        type:Boolean,
        default:false,
    },
    verificationCode:{
        type:String,
        required:true,
    }
    






}, { timestamps: true })
 const authModel= mongoose.model("Auth", authSchema);

 export default  authModel;