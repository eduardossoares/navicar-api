"use strict";
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
    async handle(req, res) {
        const { id } = req.params;
        const { brand, model, year, price, description, milage, phone, city, color, images, } = req.body;
        const user_id = req.user_id;
        adItems.map((item) => {
            if (!req.body[item.item]) {
                throw new Error(item.error);
            }
        });
        const ad = await EditAdService_1.editAdService.execute({
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
    }
}
exports.EditAdController = EditAdController;
const editAdController = new EditAdController();
exports.editAdController = editAdController;
