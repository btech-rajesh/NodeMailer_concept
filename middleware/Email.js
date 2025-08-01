import transporter from "./email.setup.js"
import authModel from "../models/auth.js";
const SendVerificationCode=async(email,VerificationCode)=>{//required mail to send otp
    try{
         const response= await transporter.sendMail({
    from: '"Rajesh Pachauri" <krajeshpachori@gmail.com>',
    to: email,
    subject: "Verify Your Email ✔",
    text: "Verify Your Email", // plain‑text body
    html: `<b>${VerificationCode}</b>`, // HTML body


    });
    console.log("Email send succesfully",response);

}catch(error){
    console.log("Email error");
    }

}


export default SendVerificationCode;