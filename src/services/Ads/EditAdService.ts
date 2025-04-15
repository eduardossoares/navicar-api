import { UpdateAdRequest } from "../../@types/AdRequest";
import prismaClient from "../../prisma";

class EditAdService {
  async execute({
    id,
    user_id,
    brand,
    city,
    color,
    description,
    milage,
    phone,
    price,
    year,
    model,
  }: UpdateAdRequest) {
    const ad = await prismaClient.ad.update({
      where: {
        id: id,
        ownerId: user_id,
      },
      data: {
        brand,
        model,
        year,
        price,
        description,
        milage,
        phone,
        city,
        color,
      },
    });

    if (!ad) throw new Error("Ad não encontrado");

    return {
      message: "Ad atualizado com sucesso",
    };
  }
}

const editAdService = new EditAdService();
export { editAdService };
