"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailUserController = void 0;
const DetailUserService_1 = require("../../services/Users/DetailUserService");
class DetailUserController {
    async handle(req, res) {
        const user_id = req.user_id; // Obtido do middleware de autenticação
        const detailUser = await DetailUserService_1.detailUserService.execute(user_id);
        res.json(detailUser);
    }
}
const detailUserController = new DetailUserController();
exports.detailUserController = detailUserController;
