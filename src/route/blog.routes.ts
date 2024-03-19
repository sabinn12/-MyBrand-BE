import express,{Request,Response} from "express";
import Jwt from "../jwt/jwt";
import blogsController from "../controller/blogscontroller";

const blogsRoutes =  express.Router();
 blogsRoutes.post('/',Jwt.tokenValidation,blogsController.create_blogs);
blogsRoutes.get('/',blogsController.getAllBlogs);
blogsRoutes.get('/:id',blogsController.getSingleBlog);
blogsRoutes.put('/:id',blogsController.updatedBlogs);
blogsRoutes.delete('/:id',blogsController.removeBlogs)


export default blogsRoutes;