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
exports.editAdController = exports.EditAdController = void 0;
const EditAdService_1 = require("../../services/Ads/EditAdService");
const adItems = [
    {
        item: "brand",
        error: "Marca é obrigatória",
    },
    {
        item: "model",
        error: "Modelo é obrigatório",
    },
    {
        item: "year",
        error: "Ano é obrigatório",
    },
    {
        item: "price",
        error: "Preço é obrigatório",
    },
    {
        item: "description",
        error: "Descrição é obrigatória",
    },
    {
        item: "milage",
        error: "Quilometragem é obrigatória",
    },
    {
        item: "phone",
        error: "Telefone é obrigatório",
    },
    {
        item: "city",
        error: "Cidade é obrigatória",
    },
    {
        item: "color",
        error: "Cor é obrigatória",
    },
];
class EditAdController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { brand, model, year, price, description, milage, phone, city, color, images, } = req.body;
            const user_id = req.user_id;
            adItems.map((item) => {
                if (!req.body[item.item]) {
                    throw new Error(item.error);
                }
            });
            const ad = yield EditAdService_1.editAdService.execute({
                id,
                user_id,
                brand,
                model,
                year,
                price,
                description,
                milage,
                phone,
                city,
                color,
                images,
            });
            res.status(200).json(ad);
        });
    }
}
exports.EditAdController = EditAdController;
const editAdController = new EditAdController();
exports.editAdController = editAdController;
