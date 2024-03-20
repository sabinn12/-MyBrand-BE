import dotenv from "dotenv"
import { sign,verify } from "jsonwebtoken";
import {  Request,Response, NextFunction} from "express";
dotenv.config();


const createToken = (user:any) => {
const accessToken = sign({ email:user.email},`${process.env.ACCESS_TOKEN_SECRET}`)
return accessToken;
}
//token validation.
const tokenValidation  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.cookies["access-token"];
    if(!accessToken){
        return res.status(401).json({error:"You Must Login First"})
    }else{
        try{
            let authenticated:any;
            const validToken = verify(accessToken,`${process.env.ACCESS_TOKEN_SECRET}`);
            if(validToken){
                authenticated = true
                return next();
            }
        }catch(err:any){
            return res.status(400).json({error:err}); 
        }
    }
}
export default {
    createToken,
     tokenValidation
    };