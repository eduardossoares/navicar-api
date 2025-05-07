"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const CreateUserService_1 = require("../../services/Users/CreateUserService");
class CreateUserController {
    async handle(req, res) {
        const { email, password } = req.body;
        const user = await CreateUserService_1.createUserService.execute({ email, password });
        res.json(user);
    }
}
exports.createUserController = new CreateUserController();
