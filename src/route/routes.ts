import express, { json } from 'express';
import controller from "../controller/blogscontroller";

const router = express.Router();

router.get("/",controller.getting_blogs);
router.get("/:id",controller.get_single_blog);
router.post('/add',controller.createBlogs);
router.put("/update/:id",controller.update_blog);
router.delete("/delete/:id",controller.deleteBlog);



export default router;