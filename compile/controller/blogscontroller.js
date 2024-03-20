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
const blogsservice_1 = __importDefault(require("../service/blogsservice"));
const joi_validation_1 = __importDefault(require("../jwt/joi.validation"));
const auth_1 = __importDefault(require("../jwt/auth")); // Import the middleware object
const create_blogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = joi_validation_1.default.validateBlogData(req.body);
        if (valid.error) {
            return res.status(400).json({
                status: 400,
                message: valid.error.message
            });
        }
        // Pass tokenValidation as middleware to the route handler
        auth_1.default.tokenValidation(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const blogs = yield blogsservice_1.default.createBlogs(req);
                if (!blogs) {
                    return res.status(400).json({
                        status: 400,
                        message: "Failed to create blog"
                    });
                }
                else {
                    return res.status(201).json({
                        status: 201,
                        message: 'New blog created'
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    status: 500,
                    message: "Internal Server Error"
                });
            }
        }));
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogsservice_1.default.retrieveBlogs();
        if (blogs.length < 1) {
            return res.status(404).json({ status: 404, blogs: blogs });
        }
        else {
            return res.status(200).json({ status: 200, blogs: blogs });
        }
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
});
const getSingleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogsservice_1.default.retrieveSingleBlogs(req);
        if (!blogs) {
            return res.status(404).json({ status: 404, blogs: "Not Found" });
        }
        else {
            return res.status(200).json({ status: 200, blogs: blogs });
        }
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
});
const updatedBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateBlg = yield blogsservice_1.default.updateBlogs(req);
        if (!updateBlg) {
            return res.status(404).json({ status: 404, blogs: "Not Found" });
        }
        else {
            return res.status(201).json({
                status: 201,
                message: 'Blog Updated'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
});
const removeBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield blogsservice_1.default.removeBlogs(req);
        if (deleted.deletedCount === 0) {
            return res.status(404).json({ status: 404, blogs: "Not Found" });
        }
        else {
            return res.status(200).json({
                status: 200,
                message: 'Blog deleted'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
});
exports.default = {
    create_blogs,
    getAllBlogs,
    getSingleBlog,
    updatedBlogs,
    removeBlogs
};
