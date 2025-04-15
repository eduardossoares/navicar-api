import prismaClient from "../../prisma";

import { AdRequest } from "../../@types/AdRequest";

class ReadAdService {
  async execute({ id }: AdRequest) {
    const ad = await prismaClient.ad.findUnique({
      where: {
        id,
      },
    });
    return ad;
  }
}

const readAdService = new ReadAdService();
export { readAdService };
