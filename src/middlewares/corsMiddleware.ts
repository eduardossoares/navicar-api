import { NextFunction, Request, Response } from "express";

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://navicar-web.vercel.app",
  ];

  const origin = req.headers.origin;

  if (!origin || allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  next();
};
