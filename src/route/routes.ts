import express, { json } from 'express';
import controller from "../controller/blogscontroller";
import commentscontroller from "../controller/commentcontroller";
const router = express.Router();

router.get("/",controller.getting_blogs);
router.get("/:id",controller.get_single_blog);
router.post('/add',controller.createBlogs);
router.put("/update/:id",controller.update_blog);
router.delete("/delete/:id",controller.deleteBlog);

router.post("/:id/comments",commentscontroller.createComments);
router.get("/:id/comments",commentscontroller.getCommentBasedOnBlogId);

export default router;