import { Request,Response } from "express";

import blogService from "../service/blogsservice";
import joiValidation from "../jwt/joi.validation";

const create_blogs = async(req:Request,res:Response) => {
    try{
        const valid = joiValidation.validateBlogData(req.body);
        const blogs = await blogService.createBlogs(req)
        if(!blogs){
            res.status(400).json({
                status:400,
                message:valid.error?.message
            });
        }else{
            res.status(201).json({
                status:201,
                message:'New blog created'
            });
        }
        
    }catch(error:any){
        res.send(error.message);
    }
}

const getAllBlogs = async(req:Request,res:Response) => {
    const blogs:any = await blogService.retrieveBlogs();
    if(blogs.length < 1){
        res.status(404).json({status:404, blogs:blogs })
    }else{
        res.status(200).json({status:200, blogs:blogs })
    }
}

const getSingleBlog = async(req:Request,res:Response) => {
    const blogs:any = await blogService.retrieveSingleBlogs(req);
    if(!blogs){
        res.status(404).json({status:404, blogs:"Not Found" })
    }else{
        res.status(200).json({status:200, blogs:blogs })
    }
}

const updatedBlogs = async(req:Request,res:Response) =>{
    const updateBlg = await blogService.updateBlogs(req);
    if(!updateBlg){
        res.status(404).json({status:404, blogs:"Not Found" })
    }else{
        res.status(201).json({
            status:201,
            message:'Blog Updated'
        });
    }
}

const removeBlogs = async(req:Request,res:Response) =>{
    const deleted:any = await blogService.removeBlogs(req);
    if(deleted.deletedCount === 0){
        res.status(404).json({status:404, blogs:"Not Found" })
    }else{
        res.status(200).json({
            status:200,
            message:'Blog deleted'
        });
    }
}

export default {
    create_blogs,
    getAllBlogs,
    getSingleBlog,
    updatedBlogs,
    removeBlogs
} 