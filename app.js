import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

const app=express();

mongoose.connect(process.env.mongoose_url)
  .then(() => console.log("MongoDB is connected"))
  .catch((e) => console.log("MongoDB connection error", e));
app.get('/',(req,res)=>{
    console.log("hello from app.js");
    
})
app.use(express.json());

//middleware
authRoutes(app);



const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server is at running port ${process.env.PORT}`);
})