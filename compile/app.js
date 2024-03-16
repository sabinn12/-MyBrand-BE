"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./route/index"));
const config_1 = require("./configuration/config");
const app = (0, express_1.default)();
const cookieParser = require('cookie-parser');
app.use(express_1.default.json());
app.use("/api/v1", index_1.default);
app.use(cookieParser());
config_1.db.once('open', () => {
    app.listen(5000, () => { console.log("Server has started!"); });
});
