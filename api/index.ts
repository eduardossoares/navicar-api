import app from "../src/api/server";
import { createServer } from "http";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const server = createServer(app);

export default function handler(req: VercelRequest, res: VercelResponse) {
  server.emit("request", req, res);
}
