"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = __importDefault(require("../jwt/jwt"));
const blogscontroller_1 = __importDefault(require("../controller/blogscontroller"));
const blogsRoutes = express_1.default.Router();
blogsRoutes.post('/', jwt_1.default.tokenValidation, blogscontroller_1.default.create_blogs);
blogsRoutes.get('/', blogscontroller_1.default.getAllBlogs);
blogsRoutes.get('/:id', blogscontroller_1.default.getSingleBlog);
blogsRoutes.put('/:id', blogscontroller_1.default.updatedBlogs);
blogsRoutes.delete('/:id', blogscontroller_1.default.removeBlogs);
exports.default = blogsRoutes;
