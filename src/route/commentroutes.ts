import express,{Request,Response} from "express";
import commentController from '../controller/commentcontroller';
const commentRoutes = express.Router();

//comments routes
commentRoutes.post("/:id/comments",commentController.createcomments);
commentRoutes.get("/:id/comments",commentController.getComentBasedOnBlogId);

export default commentRoutes;