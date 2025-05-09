import { Request, Response } from "express";
import { readAllAdService } from "../../services/Ads/ReadAllAdService";

class ReadAllAdController {
  async handle(req: Request, res: Response) {
    res.set("Cache-Control", "public, max-age=2, stale-while-revalidate=60");
    const ads = await readAllAdService.execute();
    res.status(200).json(ads);
  }
}

const readAllAdController = new ReadAllAdController();
export { readAllAdController };
