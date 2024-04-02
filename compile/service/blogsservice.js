"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = __importDefault(require("../models/blog"));
const cloudinary_1 = require("../middleware/cloudinary");
//creating a blog
const createBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let blogimg;
        if (req.file) {
            blogimg = yield (0, cloudinary_1.uploadToCloud)(req.file);
        }
        else {
            blogimg = null;
        }
        const blogs = new blog_1.default({
            title: req.body.title,
            image: blogimg,
            content: req.body.content
        });
        yield blogs.save();
        return blogs;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
//getting all blogs
const retrieveBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield blog_1.default.find();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
//Retriving a  blog
const retrieveSingleBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield blog_1.default.findOne(id);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
//updating a blog
const updateBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let blogImgUrl = null;
        if (req.file) {
            blogImgUrl = yield (0, cloudinary_1.uploadToCloud)(req.file); // Upload the image to cloud storage
        }
        const blogId = req.params.id;
        const blog = yield blog_1.default.findById(blogId);
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
        yield blog.save();
        // Return the updated blog
        return blog;
    }
    catch (error) {
        // Handle errors
        console.error('Error updating blog:', error);
        throw new Error('Failed to update blog');
    }
});
//removing a blog
const removeBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        const deleteBlg = yield blog_1.default.deleteOne(id);
        if (!deleteBlg) {
            return false;
        }
        else {
            return deleteBlg;
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    createBlogs,
    retrieveBlogs,
    retrieveSingleBlogs,
    updateBlogs,
    removeBlogs
};
