"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).json({ message: "Token is missing!" });
        return;
    }
    const token = authToken.split(" ")[1];
    const secretToken = process.env.JWT_SECRET;
    if (!secretToken) {
        throw new Error("Invalid JWT Secret");
    }
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, secretToken);
        req.user_id = sub;
        return next();
    }
    catch (_a) {
        res.status(401).json({
            message: "Invalid token!",
        });
    }
};
exports.authMiddleware = authMiddleware;
