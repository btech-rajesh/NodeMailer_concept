import {register,verifyEmail} from "../controllers/auth.controller.js";

export default function authRoutes(app){
    
   app.post('/api/register',register);
   app.post('/api/verifyemail',verifyEmail);
}