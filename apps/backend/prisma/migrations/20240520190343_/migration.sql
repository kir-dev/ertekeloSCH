-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MODERATOR', 'USER');

-- CreateEnum
CREATE TYPE "Major" AS ENUM ('SE', 'EE', 'BPROF');

-- CreateEnum
CREATE TYPE "Title" AS ENUM ('PROF', 'ASSOC_PROF', 'ASST_PROF', 'LECTURER');

-- CreateTable
CREATE TABLE "User" (
    "authSchId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "major" "Major",
    "desc" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("authSchId")
);

-- CreateTable
CREATE TABLE "Prof" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "title" "Title" NOT NULL,
    "presentationRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "knowledgeRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "helpfulnessRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pfp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentId" INTEGER,

    CONSTRAINT "Prof_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectRating" (
    "id" SERIAL NOT NULL,
    "desc" TEXT NOT NULL,
    "isAnon" BOOLEAN NOT NULL,
    "difficultyRating" INTEGER NOT NULL DEFAULT 0,
    "interestRating" INTEGER NOT NULL DEFAULT 0,
    "usefulnessRating" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "subjectId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubjectRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfRating" (
    "id" SERIAL NOT NULL,
    "desc" TEXT NOT NULL,
    "isAnon" BOOLEAN NOT NULL,
    "presentationRating" INTEGER NOT NULL DEFAULT 0,
    "knowledgeRating" INTEGER NOT NULL DEFAULT 0,
    "helpfulnessRating" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "profId" TEXT NOT NULL,
    "subjectRatingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecRating" (
    "id" SERIAL NOT NULL,
    "desc" TEXT NOT NULL,
    "isAnon" BOOLEAN NOT NULL,
    "difficultyRating" INTEGER NOT NULL DEFAULT 0,
    "interestRating" INTEGER NOT NULL DEFAULT 0,
    "usefulnessRating" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "specId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpecRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spec" (
    "id" SERIAL NOT NULL,
    "area" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "Spec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "specId" INTEGER,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProfToSubject" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProfToSubject_AB_unique" ON "_ProfToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfToSubject_B_index" ON "_ProfToSubject"("B");

-- AddForeignKey
ALTER TABLE "Prof" ADD CONSTRAINT "Prof_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRating" ADD CONSTRAINT "SubjectRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("authSchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRating" ADD CONSTRAINT "SubjectRating_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfRating" ADD CONSTRAINT "ProfRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("authSchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfRating" ADD CONSTRAINT "ProfRating_profId_fkey" FOREIGN KEY ("profId") REFERENCES "Prof"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfRating" ADD CONSTRAINT "ProfRating_subjectRatingId_fkey" FOREIGN KEY ("subjectRatingId") REFERENCES "SubjectRating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecRating" ADD CONSTRAINT "SpecRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("authSchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecRating" ADD CONSTRAINT "SpecRating_specId_fkey" FOREIGN KEY ("specId") REFERENCES "Spec"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spec" ADD CONSTRAINT "Spec_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_specId_fkey" FOREIGN KEY ("specId") REFERENCES "Spec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfToSubject" ADD CONSTRAINT "_ProfToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Prof"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfToSubject" ADD CONSTRAINT "_ProfToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
