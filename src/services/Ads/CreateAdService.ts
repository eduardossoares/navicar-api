import { AdRequest } from "../../@types/AdRequest";
import prismaClient from "../../prisma";

class CreateAdService {
  async execute({
    brand,
    city,
    color,
    description,
    milage,
    phone,
    price,
    year,
    model,
    user_id,
  }: AdRequest) {
    return {
      ok: true,
    };
  }
}

const createAdService = new CreateAdService();
export { createAdService };
