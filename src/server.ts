import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
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
