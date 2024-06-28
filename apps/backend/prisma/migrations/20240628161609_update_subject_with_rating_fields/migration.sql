-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "difficultyRating" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "interestRating" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "usefulnessRating" INTEGER NOT NULL DEFAULT 0;
