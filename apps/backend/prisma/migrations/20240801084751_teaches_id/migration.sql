/*
  Warnings:

  - The primary key for the `Teaches` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Teaches" DROP CONSTRAINT "Teaches_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Teaches_pkey" PRIMARY KEY ("id");
