"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class EditAdService {
    async execute({ id, user_id, brand, city, color, description, milage, phone, price, year, model, }) {
        const ad = await prisma_1.default.ad.update({
            where: {
                id: id,
                ownerId: user_id,
            },
            data: {
                brand,
                model,
                year,
                price,
                description,
                milage,
                phone,
                city,
                color,
            },
        });
        if (!ad)
            throw new Error("Ad não encontrado");
        return {
            message: "Ad atualizado com sucesso",
        };
    }
}
const editAdService = new EditAdService();
exports.editAdService = editAdService;
