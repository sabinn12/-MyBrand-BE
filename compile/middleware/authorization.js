"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = require("jsonwebtoken");
dotenv_1.default.config();
// Token validation.
const authenticate = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res.status(401).json({ error: "You must log in first" });
    }
    else {
        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) {
            return res.status(500).json({ error: "Internal server error" });
        }
        try {
            const validToken = (0, jsonwebtoken_1.verify)(accessToken, secret);
            if (validToken) {
                return next();
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
};
exports.default = { authenticate };
