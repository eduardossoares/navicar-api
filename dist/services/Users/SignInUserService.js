"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class SignInUserService {
    async execute({ email, password }) {
        const credentialError = "Invalid credentials";
        // Verificando se o usuário existe
        const alreadyUserExists = await prisma_1.default.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!alreadyUserExists) {
            throw new Error(credentialError);
        }
        // Verificando se a senha está correta
        const passwordMatch = await (0, bcryptjs_1.compare)(password, alreadyUserExists.password);
        if (!passwordMatch) {
            throw new Error(credentialError);
        }
        // Se tudo estiver correto, geramos o token
        const secretToken = process.env.JWT_SECRET;
        if (!secretToken) {
            throw new Error("JWT Secret not found");
        }
        const token = (0, jsonwebtoken_1.sign)({
            email: alreadyUserExists.email,
        }, secretToken, {
            subject: alreadyUserExists.id,
            expiresIn: "30d",
        });
        return {
            id: alreadyUserExists.id,
            email: alreadyUserExists.email,
            token: token,
        };
    }
}
const signInUserService = new SignInUserService();
exports.signInUserService = signInUserService;
