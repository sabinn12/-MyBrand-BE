"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likescontroller_1 = __importDefault(require("../controller/likescontroller"));
const likesRoutes = express_1.default.Router();
likesRoutes.post("/:id/likes", likescontroller_1.default.createLikes);
likesRoutes.get("/:id/likes", likescontroller_1.default.getLikesBasedOnBlogId);
likesRoutes.delete("/:id/likes/:id", likescontroller_1.default.removeLikes);
exports.default = likesRoutes;
