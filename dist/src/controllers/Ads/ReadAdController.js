"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAdController = void 0;
const ReadAdService_1 = require("../../services/Ads/ReadAdService");
class ReadAdController {
    async handle(req, res) {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Ad ID is required" });
            return;
        }
        const ad = await ReadAdService_1.readAdService.execute({ id });
        if (!ad) {
            res.status(404).json({ message: "Ad not found" });
            return;
        }
        res.status(200).json(ad);
    }
}
const readAdController = new ReadAdController();
exports.readAdController = readAdController;
