import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class SubjectRating {
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
  difficultyRating: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  interestRating: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  usefulnessRating: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
