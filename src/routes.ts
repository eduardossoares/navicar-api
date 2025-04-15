import { Router } from "express";
import { createUserController } from "./controllers/Users/CreateUserController";
import { signInUserController } from "./controllers/Users/SignInUserController";
import { detailUserController } from "./controllers/Users/DetailUserController";

import { createAdController } from "./controllers/Ads/CreateAdController";
import { readAllAdController } from "./controllers/Ads/ReadAllAdController";
import { readAdController } from "./controllers/Ads/ReadAdController";
import { removeAdController } from "./controllers/Ads/RemoveAdController";

import { authMiddleware } from "./middlewares/authMiddleware";
import { uploadMiddleware } from "./middlewares/uploadMiddleware";

export const router = Router();

// Auth Routes
router.post("/users", createUserController.handle);
router.post("/login", signInUserController.handle);
router.get("/me", authMiddleware, detailUserController.handle);

// Ads Routes
router.post(
  "/ads",
  authMiddleware,
  uploadMiddleware,
  createAdController.handle
);
router.get("/ads", readAllAdController.handle);
router.get("/ads/:id", readAdController.handle);
router.delete("/ads/:user_id/:id", authMiddleware, removeAdController.handle);
