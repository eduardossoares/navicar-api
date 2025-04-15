import { AdRequest } from "../../@types/AdRequest";
import prismaClient from "../../prisma";

class RemoveAdService {
  async execute({ id, user_id }: AdRequest) {
    await prismaClient.ad.delete({
      where: {
        id,
      },
    });

    return {
      message: "Ad removed successfully",
    };
  }
}

const removeAdService = new RemoveAdService();
export { removeAdService };
