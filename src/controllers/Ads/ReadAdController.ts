import { Request, Response } from "express";
import { readAdService } from "../../services/Ads/ReadAdService";

class ReadAdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Ad ID is required" });
      return;
    }

    const ad = await readAdService.execute({ id });
    if (!ad) {
      res.status(404).json({ message: "Ad not found" });
      return;
    }
    res.status(200).json(ad);
  }
}
const readAdController = new ReadAdController();
export { readAdController };
