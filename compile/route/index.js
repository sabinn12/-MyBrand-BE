"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const blog_routes_1 = __importDefault(require("./blog.routes"));
const likeroute_1 = __importDefault(require("./likeroute"));
const commentroutes_1 = __importDefault(require("./commentroutes"));
const querriesroutes_1 = __importDefault(require("./querriesroutes"));
const usersroutes_1 = __importDefault(require("./usersroutes"));
const router = express_1.default.Router();
// Enable CORS middleware
router.use((0, cors_1.default)());
router.use('/blogs', blog_routes_1.default);
router.use('/blogs', likeroute_1.default);
router.use('/blogs', commentroutes_1.default);
router.use('/brand', querriesroutes_1.default);
router.use('/brand', usersroutes_1.default);
exports.default = router;
