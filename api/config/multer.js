"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
exports.default = {
    upload() {
        return {
            storage: multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, "./uploads");
                },
                filename: (req, file, cb) => {
                    const fileName = `${Date.now()}-${file.originalname}`;
                    return cb(null, fileName);
                },
            }),
        };
    },
};
