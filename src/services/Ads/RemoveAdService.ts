import { RemoveAdRequest } from "../../@types/AdRequest";
import prismaClient from "../../prisma";

class RemoveAdService {
  async execute({ id, user_id }: RemoveAdRequest) {
    const ad = await prismaClient.ad.delete({
      where: {
        id,
        ownerId: user_id,
      },
    });
    if (!ad) throw new Error("Ad não encontrado");

    return {
      message: "Ad removed successfully",
    };
  }
}

const removeAdService = new RemoveAdService();
export { removeAdService };
