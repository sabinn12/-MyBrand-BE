"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blogSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now() },
    UpdatedAt: { type: Date, default: Date.now() }
});
exports.default = mongoose_1.default.model("blog", blogSchema);
