import { NextFunction, Request, Response } from "express";

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allowedOrigins = [
    process.env.NODE_ENV === "production"
      ? "https://navicar-web.vercel.app"
      : "http://localhost:3000",
  ];
  const origin = req.headers.origin;

  console.log(`[CORS] Método: ${req.method}, URL: ${req.url}, Origem: ${origin}`);

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigins[0]); 
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    console.log("[CORS] Respondendo a solicitação OPTIONS");
    res.status(200).end();
    return;
  }

  next();
};