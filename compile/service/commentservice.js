"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("../models/comment"));
const create_comments = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = { _id: req.params.id };
    const created_comments = new comment_1.default({
        visitor: req.body.visitor,
        comment: req.body.comment,
        blogID: id
    });
    yield created_comments.save();
});
const fetchComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        const result = yield comment_1.default.find({ blogID: id });
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    create_comments,
    fetchComments
};
