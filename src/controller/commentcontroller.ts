import express, {Request, Response} from 'express';
import commentservice from '../service/commentservice';

// creating comments
const createComments = async(req:Request,res:Response) => {
    try{
        const comments = await commentservice.create_comments(req)
        res.status(201).json({
            message:'New comment created'
        });
    }catch(error:any){
        res.send(error.message);
    }
}

const getCommentBasedOnBlogId = async(req:Request,res:Response) => {
    const comment:any = await commentservice.fetchComments(req);
    if(comment.length < 1){
        res.send("Comments list is empty!");
    }else{
        res.status(200).json({ comment:comment })
    }
}

export default {
    createComments,
    getCommentBasedOnBlogId
}