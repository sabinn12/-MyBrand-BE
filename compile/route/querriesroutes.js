"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const querriescontroller_1 = __importDefault(require("../controller/querriescontroller"));
const querriesRoutes = express_1.default.Router();
querriesRoutes.post("/querries", querriescontroller_1.default.createQuerries);
querriesRoutes.get("/querries", querriescontroller_1.default.getAllQuerries);
querriesRoutes.delete("/querries/:id", querriescontroller_1.default.removeQuerries);
exports.default = querriesRoutes;
