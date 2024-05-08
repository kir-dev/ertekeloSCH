import { OmitType } from '@nestjs/swagger';

import { SubjectRating } from '../entities/subject-rating.entity';

export class CreateSubjectRatingDto extends OmitType(SubjectRating, ['id', 'createdAt', 'updatedAt'] as const) {}
