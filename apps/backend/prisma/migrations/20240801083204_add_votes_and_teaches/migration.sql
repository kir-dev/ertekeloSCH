-- CreateTable
CREATE TABLE "Teaches" (
    "profId" TEXT NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "Teaches_pkey" PRIMARY KEY ("profId","subjectId")
);

-- CreateTable
CREATE TABLE "SubjectRatingVote" (
    "id" SERIAL NOT NULL,
    "isUpvote" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "ratingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subjectId" INTEGER,

    CONSTRAINT "SubjectRatingVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfRatingVote" (
    "id" SERIAL NOT NULL,
    "isUpvote" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "ratingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfRatingVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Teaches_subjectId_profId_idx" ON "Teaches"("subjectId", "profId");

-- AddForeignKey
ALTER TABLE "Teaches" ADD CONSTRAINT "Teaches_profId_fkey" FOREIGN KEY ("profId") REFERENCES "Prof"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teaches" ADD CONSTRAINT "Teaches_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRatingVote" ADD CONSTRAINT "SubjectRatingVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("authSchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRatingVote" ADD CONSTRAINT "SubjectRatingVote_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "SubjectRating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRatingVote" ADD CONSTRAINT "SubjectRatingVote_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfRatingVote" ADD CONSTRAINT "ProfRatingVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("authSchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfRatingVote" ADD CONSTRAINT "ProfRatingVote_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "ProfRating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
