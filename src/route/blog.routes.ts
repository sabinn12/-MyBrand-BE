import express,{Request,Response} from "express";
import Jwt from "../jwt/jwt";
import blogsController from "../controller/blogscontroller";
import { customFileFilter, fileUpload } from "../jwt/multer";

const blogsRoutes =  express.Router();

blogsRoutes.post('/',Jwt.tokenValidation,fileUpload.single('image'),customFileFilter,blogsController.create_blogs);

blogsRoutes.get('/',blogsController.getAllBlogs);

blogsRoutes.get('/:id',blogsController.getSingleBlog);

blogsRoutes.put('/:id',Jwt.tokenValidation,fileUpload.single('image'),customFileFilter,blogsController.updatedBlogs);

blogsRoutes.delete('/:id',Jwt.tokenValidation,blogsController.removeBlogs);

export default blogsRoutes;