-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "km" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
