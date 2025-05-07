"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllAdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ReadAllAdService {
    async execute() {
        const ads = await prisma_1.default.ad.findMany();
        return ads;
    }
}
const readAllAdService = new ReadAllAdService();
exports.readAllAdService = readAllAdService;
