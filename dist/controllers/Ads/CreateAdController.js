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
exports.createAdController = void 0;
const CreateAdService_1 = require("../../services/Ads/CreateAdService");
const cloudinary_1 = require("cloudinary");
const cloudinary_2 = require("../../config/cloudinary");
cloudinary_1.v2.config(cloudinary_2.cloudinaryConfig);
class CreateAdController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { model, brand, city, color, description, milage, phone, price, year, } = req.body;
            const user_id = req.user_id;
            const files = req.files;
            if (!user_id) {
                throw new Error("Você precisa estar logado para criar um anúncio");
            }
            if (!files || files.length === 0) {
                throw new Error("O upload de uma imagem é obrigatório");
            }
            if (files.length > 5) {
                throw new Error("O upload de no máximo 5 imagens é permitido");
            }
            if (!brand) {
                throw new Error("Marca é obrigatória");
            }
            if (!color) {
                throw new Error("Cor é obrigatória");
            }
            if (!description) {
                throw new Error("Descrição é obrigatória");
            }
            if (!milage) {
                throw new Error("Quilometragem é obrigatória");
            }
            if (!phone) {
                throw new Error("Telefone é obrigatório");
            }
            if (!price) {
                throw new Error("Preço é obrigatório");
            }
            if (!year) {
                throw new Error("Ano é obrigatório");
            }
            if (!brand) {
                throw new Error("Marca é obrigatória");
            }
            if (!city) {
                throw new Error("Cidade é obrigatória");
            }
            if (!model) {
                throw new Error("Modelo é obrigatório");
            }
            try {
                const imageUrls = yield Promise.all(files.map((file) => {
                    return new Promise((resolve, reject) => {
                        cloudinary_1.v2.uploader
                            .upload_stream({ resource_type: "image" }, (error, result) => {
                            if (error) {
                                reject(new Error("Erro ao fazer upload da imagem!"));
                            }
                            resolve((result === null || result === void 0 ? void 0 : result.secure_url) || "");
                        })
                            .end(file.buffer);
                    });
                }));
                const ad = yield CreateAdService_1.createAdService.execute({
                    model,
                    brand,
                    city,
                    color,
                    description,
                    milage,
                    phone,
                    price,
                    year,
                    user_id,
                    images: imageUrls,
                });
                res.status(201).json(ad);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    message: "Erro ao criar anúncio",
                });
            }
        });
    }
}
const createAdController = new CreateAdController();
exports.createAdController = createAdController;
