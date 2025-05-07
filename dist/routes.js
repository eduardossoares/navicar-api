"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/Users/CreateUserController");
const SignInUserController_1 = require("./controllers/Users/SignInUserController");
const DetailUserController_1 = require("./controllers/Users/DetailUserController");
const CreateAdController_1 = require("./controllers/Ads/CreateAdController");
const ReadAllAdController_1 = require("./controllers/Ads/ReadAllAdController");
const ReadAdController_1 = require("./controllers/Ads/ReadAdController");
const RemoveAdController_1 = require("./controllers/Ads/RemoveAdController");
const EditAdController_1 = require("./controllers/Ads/EditAdController");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const uploadMiddleware_1 = require("./middlewares/uploadMiddleware");
exports.router = (0, express_1.Router)();
// Auth Routes
exports.router.post("/users", CreateUserController_1.createUserController.handle);
exports.router.post("/login", SignInUserController_1.signInUserController.handle);
exports.router.get("/me", authMiddleware_1.authMiddleware, DetailUserController_1.detailUserController.handle);
// Ads Routes
exports.router.post("/ads", authMiddleware_1.authMiddleware, uploadMiddleware_1.uploadMiddleware, CreateAdController_1.createAdController.handle);
exports.router.get("/ads", ReadAllAdController_1.readAllAdController.handle);
exports.router.get("/ads/:id", ReadAdController_1.readAdController.handle);
exports.router.put("/ads/:user_id/:id", authMiddleware_1.authMiddleware, EditAdController_1.editAdController.handle);
exports.router.delete("/ads/:user_id/:id", authMiddleware_1.authMiddleware, RemoveAdController_1.removeAdController.handle);
