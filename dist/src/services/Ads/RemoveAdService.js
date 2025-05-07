"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class RemoveAdService {
    async execute({ id, user_id }) {
        const ad = await prisma_1.default.ad.delete({
            where: {
                id,
                ownerId: user_id,
            },
        });
        if (!ad)
            throw new Error("Ad não encontrado");
        return {
            message: "Ad removed successfully",
        };
    }
}
const removeAdService = new RemoveAdService();
exports.removeAdService = removeAdService;
