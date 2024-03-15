import {Request,Response,NextFunction} from "express";
import userService from '../service/usersservice';
import Jwt from "../jwt/jwt";
import bcrypt from "bcrypt"

const register = async(req:Request,res:Response) => {
    try{
        const users = await userService.users_register(req)
        res.status(201).json({
            status:201,
            message:'User registered'
        });
    }catch(error:any){
        res.send(error.message);
    }
}

const login = async(req:Request,res:Response) =>{
    try{
        const {password} = req.body;
        const user = await userService.userLogin(req);
        if(!user){
            res.status(404).json({
                status:404,
                message:'User Not Found '
            }); 
        }else{
             bcrypt.compare(password,user.password)
            .then((match) =>{
                if(!match){
                    res.status(400).json({
                        status:400,
                        message:'check your email and password well'
                    });
                }else{
                    const accessToken = Jwt.createToken(user);
                    res.cookie("access-token",accessToken,{
                        maxAge: 60 * 60 * 24 * 31 * 1000,
                        httpOnly:true,
                    })
                    res.status(200).json({
                        status:201,
                        message:'User logged in '
                    });
                }
            })
            
        }
    }catch(err:any){
        throw new Error(err.message);
    }
}
const userProfile = async(req:Request,res:Response) =>{
    const profile = userService.gettingLoggedInUser();
    if(!profile){
        res.status(400).json({
            status:400,
            message:'User not found'
        });
    }else{
        res.status(200).json({
            status:200,
            message:"Profile",
            data: {
                "username": String,
                "email": String
            }
        });
    }
}
export default {
    register,
    login,
    userProfile
}