"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAdService {
    async execute({ brand, city, color, description, milage, phone, price, year, model, user_id, images, }) {
        const stringYear = String(year);
        const ad = await prisma_1.default.ad.create({
            data: {
                model,
                brand,
                city,
                color,
                description,
                milage,
                phone,
                price,
                year: stringYear,
                ownerId: user_id,
                images,
            },
            select: {
                id: true,
                ownerId: true,
                brand: true,
                model: true,
                color: true,
                price: true,
                city: true,
                description: true,
                milage: true,
                phone: true,
                year: true,
                images: true,
                createdAt: true,
            },
        });
        return ad;
    }
}
const createAdService = new CreateAdService();
exports.createAdService = createAdService;
