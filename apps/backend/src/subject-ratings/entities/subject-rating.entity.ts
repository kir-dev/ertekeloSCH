import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class SubjectRating {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  desc: string;

  @ApiProperty()
  @IsBoolean()
  isAnon: boolean;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(5)
  difficultyRating: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(5)
  interestRating: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(5)
  usefulnessRating: number;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
