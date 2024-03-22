"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const blogscontroller_1 = __importDefault(require("../controller/blogscontroller"));
const multer_1 = require("../jwt/multer");
const blogsRoutes = express_1.default.Router();
blogsRoutes.post('/', auth_1.default.tokenValidation, multer_1.fileUpload.single('image'), multer_1.customFileFilter, blogscontroller_1.default.create_blogs);
blogsRoutes.get('/', blogscontroller_1.default.getAllBlogs);
blogsRoutes.get('/:id', blogscontroller_1.default.getSingleBlog);
blogsRoutes.put('/:id', auth_1.default.tokenValidation, multer_1.fileUpload.single('image'), multer_1.customFileFilter, blogscontroller_1.default.updatedBlogs);
blogsRoutes.delete('/:id', auth_1.default.tokenValidation, blogscontroller_1.default.removeBlogs);
exports.default = blogsRoutes;
