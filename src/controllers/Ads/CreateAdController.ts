import { Request, Response } from "express";
import { createAdService } from "../../services/Ads/CreateAdService";
import { AdRequest } from "../../@types/AdRequest";

class CreateAdController {
  async handle(req: Request, res: Response) {
    const {
      model,
      brand,
      city,
      color,
      description,
      milage,
      phone,
      price,
      year,
    }: AdRequest = req.body;
    const user_id = req.user_id;

    const ad = await createAdService.execute({
      model,
      brand,
      city,
      color,
      description,
      milage,
      phone,
      price,
      year,
      user_id,
    });
  }
}

const createAdController = new CreateAdController();
export { createAdController };
