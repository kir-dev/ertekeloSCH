import { PartialType } from '@nestjs/swagger';

import { CreateProfRatingDto } from './create-prof-rating.dto';

export class UpdateProfRatingDto extends PartialType(CreateProfRatingDto) {}
