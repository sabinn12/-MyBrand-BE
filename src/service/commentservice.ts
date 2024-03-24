import { Request,Response } from "express";
import comments from "../models/comment";
import joiValidation from "../jwt/joi.validation";
// import blog from "../models/blog";
const create_comments = async(req:Request) => {
    const valid = joiValidation.validateCommentData(req.body);
     const id = { _id: req.params.id };
     if(valid.error){
        return false;
     }else{
        const created_coments = new comments({
            Email:req.body.Email,
            Comment:req.body.Comment,
            blogID:id
        })
       await created_coments.save();
     }
}
const fetchComments = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
    return await comments.find({blogID:id});
    }catch(error:any){
    throw new Error(error.message);
    }
}

export default {
    create_comments,
    fetchComments
}