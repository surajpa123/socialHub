
import jwt  from "jsonwebtoken";
// const env  = require("dotenv");

// env.config()


export const verifyToken = (req,res,next)=>{

    try {

        //hsghsg

        const token =  req.headers("Authrization"); // Assuming token is sent in the "Authorization" header

        if(!token){
            return res.status(403).send("Acess Denied")
        }

        if(token.startsWith("Bearer ")){
        token = token.slice(7,token.length).trimLeft();
        }

        const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decodeToken

        next()
        
    } catch (error) {

        console.log(error)
        res.send(error)
    }
      
}

