import { OmitType } from '@nestjs/swagger';

import { ProfRating } from '../entities/prof-rating.entity';

export class CreateProfRatingDto extends OmitType(ProfRating, ['id', 'createdAt', 'updatedAt'] as const) {}
