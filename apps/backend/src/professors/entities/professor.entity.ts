/* eslint-disable prettier/prettier */

//! Note this error here! (Module '"@prisma/client"' has no exported member 'Title'.)
import { Department, Subject, Title } from '@prisma/client';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProfRating } from 'src/prof-ratings/entities/prof-rating.entity';

export class Professor {
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  desc: string;

  title: Title;

  @IsNumber()
  presentationRating: number;

  @IsNumber()
  knowledgeRating: number;

  @IsNumber()
  helpfulnessRating: number;

  @IsString()
  pfp: string; //link

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  subjects: Subject[];

  ProfRating: ProfRating[];

  Department: Department;
}
