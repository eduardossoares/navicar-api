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
exports.readAdController = void 0;
const ReadAdService_1 = require("../../services/Ads/ReadAdService");
class ReadAdController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "Ad ID is required" });
                return;
            }
            const ad = yield ReadAdService_1.readAdService.execute({ id });
            if (!ad) {
                res.status(404).json({ message: "Ad not found" });
                return;
            }
            res.status(200).json(ad);
        });
    }
}
const readAdController = new ReadAdController();
exports.readAdController = readAdController;
