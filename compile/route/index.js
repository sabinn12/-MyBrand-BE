"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const likeroute_1 = __importDefault(require("./likeroute"));
const commentroutes_1 = __importDefault(require("./commentroutes"));
const router = express_1.default.Router();
router.use('/blogs', routes_1.default);
router.use('/blogs', likeroute_1.default);
router.use('/blogs', commentroutes_1.default);
exports.default = router;
