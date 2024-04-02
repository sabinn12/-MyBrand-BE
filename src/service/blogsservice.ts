import { Request } from "express";
import Blogs from "../models/blog";
import { uploadToCloud } from "../middleware/cloudinary";
//creating a blog
const createBlogs = async (req:Request) => {

    try{
            let blogimg;
            if(req.file){
                blogimg = await uploadToCloud(req.file);
                
            }else{
                blogimg = null;
            }
            const blogs = new Blogs({
                title:req.body.title,
                image:blogimg,
                content:req.body.content
            });
            await blogs.save();
        return blogs;
    }catch(err:any){
        throw new Error(err.message);
    }
}
//getting all blogs
const retrieveBlogs = async() =>{
    try{
        return await Blogs.find();
        }catch(error:any){
        throw new Error(error.message);
        }
}
//Retriving a  blog
const retrieveSingleBlogs = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
        return await Blogs.findOne(id);
        }catch(error:any){
        throw new Error(error.message);
        }
}
//updating a blog
const updateBlogs = async (req: Request) => {
    try {
        let blogImgUrl: string | null = null;
        if (req.file) {
            blogImgUrl = await uploadToCloud(req.file); // Upload the image to cloud storage
        }
        const blogId = req.params.id;
        const blog = await Blogs.findById(blogId);
        if (!blog) {
            return 'Blog not found';
        }
        if (req.body.title) {
            blog.title = req.body.title;
        }
        if (req.body.content) {
            blog.content = req.body.content;
        }
        if (blogImgUrl) {
            blog.image = blogImgUrl; // Update the image URL
        }

        // Save the updated blog
        await blog.save();

        // Return the updated blog
        return blog;
    } catch (error) {
        // Handle errors
        console.error('Error updating blog:', error);
        throw new Error('Failed to update blog');
    }
};

//removing a blog
const removeBlogs = async(req:Request) =>{
    try{
        const id = { _id: req.params.id };
            const deleteBlg:any = await Blogs.deleteOne(id);
            if(!deleteBlg){
                return false;
            }else{
                return deleteBlg;
            }
        }catch(error:any){
        throw new Error(error.message);
        }
}
export default {
    createBlogs,
    retrieveBlogs,
    retrieveSingleBlogs,
    updateBlogs,
    removeBlogs
}
