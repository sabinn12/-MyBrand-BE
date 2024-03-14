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
//getting all blogs
const getting_blogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_1.default.find();
    if (blogs.length < 1) {
        res.sendStatus(404);
    }
    else {
        res.send(blogs);
    }
});
//getting a single blog
const get_single_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        const blog = yield blog_1.default.findOne(id);
        if (!blog) {
            res.sendStatus(404);
        }
        else {
            res.send(blog);
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
//creating a blog
const createBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = new blog_1.default({
            title: req.body.title,
            image: req.body.image,
            content: req.body.content
        });
        yield blog.save();
        res.json({ message: 'New blog created', blog: blog });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Updating a blog
const update_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        const blog = yield blog_1.default.findOne(id);
        if (blog) {
            if (req.body.title) {
                blog.title = req.body.title;
            }
            if (req.body.image) {
                blog.image = req.body.image;
            }
            if (req.body.content) {
                blog.content = req.body.content;
            }
            yield blog.save();
            res.json({ message: 'Blog updated!', blog: blog });
        }
        else {
            res.status(404).json({ message: 'Blog not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Deleting a blog
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blog = yield blog_1.default.findByIdAndDelete(id);
        if (!blog) {
            res.status(404).json({ message: `cannot find any blog with ID ${id}` });
            return;
        }
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    getting_blogs,
    get_single_blog,
    createBlogs,
    update_blog,
    deleteBlog
};
