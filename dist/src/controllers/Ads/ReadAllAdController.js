"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllAdController = void 0;
const ReadAllAdService_1 = require("../../services/Ads/ReadAllAdService");
class ReadAllAdController {
    async handle(req, res) {
        const ads = await ReadAllAdService_1.readAllAdService.execute();
        res.status(200).json(ads);
    }
}
const readAllAdController = new ReadAllAdController();
exports.readAllAdController = readAllAdController;
