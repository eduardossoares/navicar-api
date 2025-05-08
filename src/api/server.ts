import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "../routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://navicar-web.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({
      error: err.message,
    });
    return;
  }
  res.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  });
  return;
});

export default app;
