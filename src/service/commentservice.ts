import { Request,Response } from "express";
import comments from "../models/comment";
// import blog from "../models/blog";
const create_comments = async(req:Request) => {
     const id = { _id: req.params.id };
    const created_comments = new comments({
        visitor:req.body.visitor,
        comment:req.body.comment,
        blogID:id
    })
   await created_comments.save();
}
const fetchComments = async(req: Request, res: Response) => {
    try {
        const id = { _id: req.params.id };
        const result = await comments.find({blogID:id});
        res.json(result);
    } catch(error: any) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    create_comments,
    fetchComments
}