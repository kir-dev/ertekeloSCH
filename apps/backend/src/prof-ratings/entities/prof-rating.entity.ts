import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class ProfRating {
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
  presentationRating: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(5)
  knowledgeRating: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(5)
  helpfulnessRating: number;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
