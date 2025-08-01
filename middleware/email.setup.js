import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const  transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass:process.env.PASS_KEY,
  },
});
// console.log("this is key"+process.env.PASS_KEY);
export default transporter;

const SendEmail=async()=>{
    try{
        const info = await transporter.sendMail({
    from: '"Rajesh Pachauri" <krajeshpachori@gmail.com>',
    to: "rajesh.kumar_cs22@gla.ac.in",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body


    });
    console.log(info);
}
    catch(error){
        console.log(error);


    }
}
SendEmail();