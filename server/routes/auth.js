import express from 'express';
import {login} from "../controllers/auth.js";
import {register} from "../controllers/auth.js";

const router = express.Router();

 router.post("/login", login);

 router.post("/signup", register);

 router.get("/",(req,res)=>{
    res.status(200).json({msg:"This is home route"})
 })

 export default router