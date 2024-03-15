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
const likes_1 = __importDefault(require("../models/likes"));
const create_likes = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = { _id: req.params.id };
    const created_likes = new likes_1.default({
        like: req.body.like,
        blogID: id
    });
    yield created_likes.save();
});
const fetchlikes = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        return yield likes_1.default.find({ blogID: id });
    }
    catch (error) {
        throw new Error(error.message);
    }
});
const remove_likes = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = { _id: req.params.id };
        //const LikeId = { _id: req.params.id };
        return yield likes_1.default.deleteOne(id);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    create_likes,
    fetchlikes,
    remove_likes
};
