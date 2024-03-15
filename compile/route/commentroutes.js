"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentcontroller_1 = __importDefault(require("../controller/commentcontroller"));
const commentRoutes = express_1.default.Router();
commentRoutes.post("/:id/comments", commentcontroller_1.default.createComments);
commentRoutes.get("/:id/comments", commentcontroller_1.default.getCommentBasedOnBlogId);
exports.default = commentRoutes;
