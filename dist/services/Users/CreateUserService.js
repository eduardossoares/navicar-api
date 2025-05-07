"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    async execute({ email, password }) {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const userAlreadyExists = await prisma_1.default.user.findUnique({
            where: {
                email: email,
            },
        });
        if (userAlreadyExists) {
            throw new Error("Email already registered");
        }
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        const user = await prisma_1.default.user.create({
            data: {
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
            },
        });
        return user;
    }
}
const createUserService = new CreateUserService();
exports.createUserService = createUserService;
