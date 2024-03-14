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
// Fetch all blogs
const fetchBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield blog_1.default.find();
    }
    catch (error) {
        return error.message;
    }
});
// Fetch a single blog
const fetchingSingleBlog = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield blog_1.default.findOne(id);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
// Post blogs
const postingBlogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBlog = new blog_1.default({
            title: req.body.title,
            image: req.body.image,
            content: req.body.content
        });
        yield newBlog.save();
        return newBlog;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
// Update a blog
const updatingBlog = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        const updatedBlog = yield blog_1.default.findOne(id);
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
            return yield updatedBlog.save();
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
});
// Delete a blog
const deleteBlog = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield blog_1.default.deleteOne(id);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    fetchBlogs,
    fetchingSingleBlog,
    postingBlogs,
    updatingBlog,
    deleteBlog
};
