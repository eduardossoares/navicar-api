import { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/api/server"; // ou onde estiver seu `app`

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res); // Express lida com isso por baixo dos panos
}
