import express, { NextFunction, Request, Response } from "express";
import { router } from "../routes";
import { corsMiddleware } from "../middlewares/corsMiddleware";
import compression from "compression";

const app = express();

app.use(express.json());
app.use(compression());
app.use(corsMiddleware);
app.use(router);

const PORT = 3333;
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://navicar-web.vercel.app"
    : `http://localhost:${PORT}`;

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

app.listen(PORT, () => {
  console.log(`Server is running on ${baseURL}`);
});

export default app;
