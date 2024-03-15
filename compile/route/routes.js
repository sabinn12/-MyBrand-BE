"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogscontroller_1 = __importDefault(require("../controller/blogscontroller"));
const router = express_1.default.Router();
router.get("/", blogscontroller_1.default.getting_blogs);
router.get("/:id", blogscontroller_1.default.get_single_blog);
router.post('/add', blogscontroller_1.default.createBlogs);
router.put("/update/:id", blogscontroller_1.default.update_blog);
router.delete("/delete/:id", blogscontroller_1.default.deleteBlog);
exports.default = router;
