"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ReadAdService {
    async execute({ id }) {
        const ad = await prisma_1.default.ad.findUnique({
            where: {
                id,
            },
        });
        if (!ad)
            throw new Error("Ad não encontrado");
        return ad;
    }
}
const readAdService = new ReadAdService();
exports.readAdService = readAdService;
