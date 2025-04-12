/*
  Warnings:

  - You are about to drop the column `km` on the `Ad` table. All the data in the column will be lost.
  - Added the required column `color` to the `Ad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Ad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `milage` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "km",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "milage" TEXT NOT NULL;
