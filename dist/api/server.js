"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://navicar-web.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        res.status(400).json({
            error: err.message,
        });
        return;
    }
    res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
    });
    return;
});
exports.default = app;
