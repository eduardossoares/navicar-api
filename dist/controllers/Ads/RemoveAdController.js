"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdController = void 0;
const RemoveAdService_1 = require("../../services/Ads/RemoveAdService");
class RemoveAdController {
    async handle(req, res) {
        const user_id = req.user_id;
        if (!user_id)
            throw new Error("Usuário não encontrado");
        const { id } = req.params;
        if (!id)
            throw new Error("ID do anúncio não encontrado");
        await RemoveAdService_1.removeAdService.execute({ id, user_id });
        res.status(200).json({
            message: "Anúncio removido com sucesso",
        });
    }
}
const removeAdController = new RemoveAdController();
exports.removeAdController = removeAdController;
