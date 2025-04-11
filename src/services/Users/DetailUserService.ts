import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {
    const alreadyUserExists = await prismaClient.user.findUnique({
      where: {
        id: user_id,
      },

      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });
    return alreadyUserExists;
  }
}

const detailUserService = new DetailUserService();
export { detailUserService };
