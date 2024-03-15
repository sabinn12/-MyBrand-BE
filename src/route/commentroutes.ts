import express,{Request,Response} from "express";
import commentscontroller from "../controller/commentcontroller";

const commentRoutes = express.Router();


commentRoutes.post("/:id/comments",commentscontroller.createComments);
commentRoutes.get("/:id/comments",commentscontroller.getCommentBasedOnBlogId);

export default commentRoutes;