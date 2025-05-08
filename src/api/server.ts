import express, { NextFunction, Request, Response } from "express";
import { router } from "../routes";
import { corsMiddleware } from "../middlewares/corsMiddleware";

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(`Error: ${err.message}`);
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
