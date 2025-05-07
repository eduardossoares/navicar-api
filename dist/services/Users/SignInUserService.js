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
exports.signInUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class SignInUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const credentialError = "Invalid credentials";
            // Verificando se o usuário existe
            const alreadyUserExists = yield prisma_1.default.user.findUnique({
                where: {
                    email: email,
                },
            });
            if (!alreadyUserExists) {
                throw new Error(credentialError);
            }
            // Verificando se a senha está correta
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, alreadyUserExists.password);
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
        });
    }
}
const signInUserService = new SignInUserService();
exports.signInUserService = signInUserService;
