import { Request, Response } from 'express';
import Blog from '../models/blog';

// Fetch all blogs
const fetchBlogs = async (): Promise<any> => {
    try {
        return await Blog.find();
    } catch (error) {
        return (error as Error).message;
    }
}

// Fetch a single blog
const fetchingSingleBlog = async (req: Request): Promise<any> => {
    try {
        const id = { _id: req.params.id };
        return await Blog.findOne(id);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

// Post blogs
const postingBlogs = async (req: Request): Promise<any> => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            image: req.body.image,
            content: req.body.content
        });
        await newBlog.save();
        return newBlog;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

// Update a blog
const updatingBlog = async (req: Request): Promise<any> => {
    try {
        const id = { _id: req.params.id };
        const updatedBlog = await Blog.findOne(id);
        if (updatedBlog) {
            if (req.body.title) {
                updatedBlog.title = req.body.title;
            }
            if (req.body.image) {
                updatedBlog.image = req.body.image;
            }
            if (req.body.content) {
                updatedBlog.content = req.body.content;
            }
            return await updatedBlog.save();
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

// Delete a blog
const deleteBlog = async (req: Request): Promise<any> => {
    try {
        const id = { _id: req.params.id };
        return await Blog.deleteOne(id);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export default {
    fetchBlogs,
    fetchingSingleBlog,
    postingBlogs,
    updatingBlog,
    deleteBlog
}
