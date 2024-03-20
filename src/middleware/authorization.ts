import { Request, Response, NextFunction } from "express";
import { sign, verify } from "jsonwebtoken";

// Token validation.
const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res.status(401).json({ error: "You must log in first" });
    } else {
        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) {
            return res.status(500).json({ error: "Internal server error" });
        }
        try {
            const validToken = verify(accessToken, secret);
            if (validToken) {
                return next();
            }
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}

export default { authenticate };
