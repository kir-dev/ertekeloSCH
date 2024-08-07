import { IsNumber, IsOptional, IsString } from 'class-validator';

export class Subject {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  desc: string;

  @IsString()
  subjectCode: string;

  @IsNumber()
  departmentId: number;

  @IsNumber()
  @IsOptional()
  specId?: number;
}
