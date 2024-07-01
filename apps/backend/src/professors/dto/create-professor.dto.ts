import { OmitType } from '@nestjs/swagger';

import { Professor } from '../entities/professor.entity';

export class CreateProfessorDto extends OmitType(Professor, [
  'id',
  'presentationRating',
  'ProfRating',
  'knowledgeRating',
  'helpfulnessRating',
  'createdAt',
  'updatedAt',
  'Department',
]) {
  departmentId: number;
}
