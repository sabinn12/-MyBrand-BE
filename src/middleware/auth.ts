import dotenv from "dotenv"
import token,{ sign,verify } from "jsonwebtoken";
import {  Request,Response, NextFunction} from "express";
dotenv.config();


const createToken = (user:any) => {
const accessToken = sign({ email:user.email},`${process.env.ACCESS_TOKEN_SECRET}`)
return accessToken;
}
//token validation.
const tokenValidation  = (req:Request,res:Response,next:NextFunction) => {
    const accessToken  = req.headers.authorization?.split(" ")[1];
    if(accessToken){
        token.verify(accessToken,`${process.env.ACCESS_TOKEN_SECRET}`,(error:any,authorized: any) => {
        if(error){
            return res.status(401).json({error:"You Must Login First"})
        }else{
            req.body = authorized
            next()
        }    
        })
        
    }else{
        return res.status(401).json({error:"You Must Login First"})
        
    }
}
export default {
    createToken,
     tokenValidation
    };