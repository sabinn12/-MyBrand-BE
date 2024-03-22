"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
dotenv_1.default.config();
const createToken = (user) => {
    const accessToken = (0, jsonwebtoken_1.sign)({ email: user.email }, `${process.env.ACCESS_TOKEN_SECRET}`);
    return accessToken;
};
//token validation.
const tokenValidation = (req, res, next) => {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (accessToken) {
        jsonwebtoken_1.default.verify(accessToken, `${process.env.ACCESS_TOKEN_SECRET}`, (error, authorized) => {
            if (error) {
                return res.status(401).json({ error: "You Must Login First" });
            }
            else {
                req.body = authorized;
                next();
            }
        });
    }
    else {
        return res.status(401).json({ error: "You Must Login First" });
    }
};
exports.default = {
    createToken,
    tokenValidation
};
