import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class ProfRating {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsBoolean()
  isAnon: boolean;

  @IsNumber()
  @Min(1)
  @Max(5)
  presentationRating: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  knowledgeRating: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  helpfulnessRating: number;

  @IsString()
  profId: string;

  @IsNumber()
  // A ProfRating belongs to a SubjectRating, since you cannot rate a professor without rating a subject,
  // however you can rate more professors for the same subject.
  subjectRatingId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
