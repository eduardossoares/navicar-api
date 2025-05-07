"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DetailUserService {
    async execute(user_id) {
        const alreadyUserExists = await prisma_1.default.user.findUnique({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                email: true,
            },
        });
        return alreadyUserExists;
    }
}
const detailUserService = new DetailUserService();
exports.detailUserService = detailUserService;
