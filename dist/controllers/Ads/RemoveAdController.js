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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdController = void 0;
const RemoveAdService_1 = require("../../services/Ads/RemoveAdService");
class RemoveAdController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.user_id;
            if (!user_id)
                throw new Error("Usuário não encontrado");
            const { id } = req.params;
            if (!id)
                throw new Error("ID do anúncio não encontrado");
            yield RemoveAdService_1.removeAdService.execute({ id, user_id });
            res.status(200).json({
                message: "Anúncio removido com sucesso",
            });
        });
    }
}
const removeAdController = new RemoveAdController();
exports.removeAdController = removeAdController;
