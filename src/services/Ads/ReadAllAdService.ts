import prismaClient from "../../prisma";

class ReadAllAdService {
  async execute() {
    const ads = await prismaClient.ad.findMany();
    return ads;
  }
}

const readAllAdService = new ReadAllAdService();
export { readAllAdService };