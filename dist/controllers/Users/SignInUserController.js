"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUserController = void 0;
const SignInUserService_1 = require("../../services/Users/SignInUserService");
class SignInUserController {
    async handle(req, res) {
        const { email, password } = req.body;
        const user = await SignInUserService_1.signInUserService.execute({ email, password });
        res.status(200).json(user);
    }
}
const signInUserController = new SignInUserController();
exports.signInUserController = signInUserController;
