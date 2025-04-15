import { CreateAdRequest } from "../../@types/CreateAdRequest";
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
    images,
  }: CreateAdRequest) {
    const stringYear = String(year);

    const ad = await prismaClient.ad.create({
      data: {
        model,
        brand,
        city,
        color,
        description,
        milage,
        phone,
        price,
        year: stringYear,
        ownerId: user_id,
        images,
      },
      select: {
        id: true,
        ownerId: true,
        brand: true,
        model: true,
        color: true,
        price: true,
        city: true,
        description: true,
        milage: true,
        phone: true,
        year: true,
        images: true,
        createdAt: true,
      },
    });

    return ad;
  }
}

const createAdService = new CreateAdService();
export { createAdService };
