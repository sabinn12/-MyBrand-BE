import { Request,Response } from "express";
import comments from "../models/comment";
import blog from "../models/blog";
const create_comments = async(req:Request) => {
     const id = { _id: req.params.id };
    const created_comments = new comments({
        visitor:req.body.visitor,
        comment:req.body.comment,
        blogID:id
    })
   await created_comments.save();
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