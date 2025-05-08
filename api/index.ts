import app from "../src/api/server";
import { createServer } from "http";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import microCors from "micro-cors";

// CORS direto no handler Vercel
const cors = microCors({
  origin: ["https://navicar-web.vercel.app", "http://localhost:3000"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

const server = createServer(app);

function handler(req: VercelRequest, res: VercelResponse) {
  server.emit("request", req, res);
}

// Exporta com CORS aplicado
export default cors(handler);
