"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const createToken = (user) => {
    const accessToken = (0, jsonwebtoken_1.sign)({ email: user.email }, "sabinirakiza");
    return accessToken;
};
const tokenValidation = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res.status(400).json({ error: " you must log in with your account first" });
    }
    else {
        try {
            let authenticated;
            const validToken = (0, jsonwebtoken_1.verify)(accessToken, "sabinirakiza");
            if (validToken) {
                authenticated = true;
                return next();
            }
        }
        catch (err) {
            return res.status(400).json({ error: err });
        }
    }
};
exports.default = {
    createToken,
    tokenValidation
};
