import { Request, Response } from 'express';
import Blog from '../models/blog';

//getting all blogs
const getting_blogs = async (req: Request, res: Response): Promise<void> => {
    const blogs = await Blog.find();
    if(blogs.length < 1){
        res.sendStatus(404);
    }else{
        res.send(blogs);
    }
}

//getting a single blog
const get_single_blog = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = { _id: req.params.id };
        const blog = await Blog.findOne(id)
        if(!blog){
            res.sendStatus(404);
        }else{
            res.send(blog);
        }
    }catch(error){
        res.send((error as Error).message);
    }
}

//creating a blog
const createBlogs = async (req: Request, res: Response): Promise<void> => {
    try{
        const blog = new Blog({
            title:req.body.title,
            image:req.body.image,
            content:req.body.content
        });
        await blog.save();
        res.json({ message: 'New blog created', blog: blog });
    }catch(error){
        res.status(500).json({ message: (error as Error).message });
    }
}

// Updating a blog
const update_blog = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = { _id: req.params.id };
        const blog = await Blog.findOne(id)
        if(blog){
            if(req.body.title){
                blog.title = req.body.title
            }
            if(req.body.image){
                blog.image = req.body.image
            }
            if(req.body.content){
                blog.content = req.body.content
            }
            await blog.save();
            res.json({ message: 'Blog updated!', blog: blog });
        }else{
            res.status(404).json({ message: 'Blog not found' });
        }
    }catch(error){
        res.status(500).json({ message: (error as Error).message });
    }
}

//Deleting a blog
const deleteBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndDelete(id);
         if(!blog){
            res.status(404).json({message: `cannot find any blog with ID ${id}`});
            return;  
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({message: (error as Error).message});
    }
}

export default {
    getting_blogs,
    get_single_blog,
    createBlogs,
    update_blog,
    deleteBlog
}
