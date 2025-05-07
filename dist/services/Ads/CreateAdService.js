"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAdService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ brand, city, color, description, milage, phone, price, year, model, user_id, images, }) {
            const stringYear = String(year);
            const ad = yield prisma_1.default.ad.create({
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
        });
    }
}
const createAdService = new CreateAdService();
exports.createAdService = createAdService;
