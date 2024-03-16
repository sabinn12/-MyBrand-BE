import express, {Request, Response} from 'express';
import commentService from '../service/commentservice';
import joiValidation from "../jwt/joi.validation";
// Creating Comments 
  const createcomments = async(req:Request,res:Response) => {
    try{
        const valid = joiValidation.validateCommentData(req.body);
        const coments = await commentService.create_comments(req)
        if(valid.error){
            res.status(400).json({
                status:400,
                message:valid.error?.message
            });
        }else{
            res.status(201).json({
                status:201,
                message:'New comment created'
            });
        }
       
    }catch(error:any){
        res.send(error.message);
    }
}

const getComentBasedOnBlogId = async(req:Request,res:Response) => {
    const comment:any = await commentService.fetchComments(req,res);
    if(comment.length < 1){
        res.status(200).json({status:200, comment:comment });
    }else{
        res.status(200).json({status:200, comment:comment })
    }
}

export default {
    createcomments,
    getComentBasedOnBlogId
}