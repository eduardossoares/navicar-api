import { Request, Response } from "express";
import { readAllAdService } from "../../services/Ads/ReadAllAdService";

class ReadAllAdController {
  async handle(req: Request, res: Response) {
    const ads = await readAllAdService.execute();
    res.status(200).json(ads);
  }
}

const readAllAdController = new ReadAllAdController();
export { readAllAdController };
