"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userscontroller_1 = __importDefault(require("../controller/userscontroller"));
const usersRoutes = express_1.default.Router();
usersRoutes.post("/users", userscontroller_1.default.register);
usersRoutes.post("/users/login", userscontroller_1.default.login);
usersRoutes.get("/users", userscontroller_1.default.userProfile);
exports.default = usersRoutes;
