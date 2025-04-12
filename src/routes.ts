import { Router } from "express";
import { createUserController } from "./controllers/Users/CreateUserController";
import { signInUserController } from "./controllers/Users/SignInUserController";
import { detailUserController } from "./controllers/Users/DetailUserController";

import { createAdController } from "./controllers/Ads/CreateAdController";

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
