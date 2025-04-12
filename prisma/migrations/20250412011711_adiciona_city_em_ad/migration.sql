/*
  Warnings:

  - You are about to drop the column `image` on the `Ad` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `Ad` table. All the data in the column will be lost.
  - Added the required column `city` to the `Ad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_owner_fkey";

-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "image",
DROP COLUMN "owner",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
