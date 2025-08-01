import authModel from "../models/auth.js";
import SendVerificationCode from "../middleware/Email.js"
import bcrypt from "bcrypt";

export const register =async (req,res)=>{
   try{
     let {name,email,password}=req.body;
   if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
    const existingUser=await authModel.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"Email already Exist"});
    }

    // create
    const salt= await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(password,salt);
     const verificationcode=Math.floor(10000+Math.random()*900000).toString()

    const newUser=new authModel({
        name,email,
        password:hashpassword,
        verificationCode:verificationcode,
    });
    
    await newUser.save();
    SendVerificationCode(email,verificationcode);
     res.status(201).json({ message: "User registered", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }


}





//verifyemail
export const verifyEmail=async(req,res)=>{
  // console.log("VERIFY EMAIL ", req.body);
  try{
    let {code}=req.body;
    console.log("Code received:", code);
    const validatecodeuser=await authModel.findOne({
      verificationCode:code,
    })
    // console.log(validatecodeuser);
    if(!validatecodeuser){
      return res.status(400).json({success:false,message:"Invalid or Expired Code"});
    }
    validatecodeuser.isverified=true;
validatecodeuser.verificationCode=undefined

 await validatecodeuser.save();
 res.status(200).json({message:"Code is verify Successfully"});
  }catch(error){
console.log("Error during verification:", error.message);
    res.status(500).json({message:"Code is not valid ! Please try again"})

  }

}
