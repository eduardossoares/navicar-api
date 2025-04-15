import prismaClient from "../../prisma";
import { ReadAdRequest } from "../../@types/AdRequest";

class ReadAdService {
  async execute({ id }: ReadAdRequest) {
    const ad = await prismaClient.ad.findUnique({
      where: {
        id,
      },
    });
    if (!ad) throw new Error("Ad não encontrado");

    return ad;
  }
}

const readAdService = new ReadAdService();
export { readAdService };
