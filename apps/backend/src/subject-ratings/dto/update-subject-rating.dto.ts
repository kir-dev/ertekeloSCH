import { PartialType } from '@nestjs/swagger';

import { CreateSubjectRatingDto } from './create-subject-rating.dto';

export class UpdateSubjectRatingDto extends PartialType(CreateSubjectRatingDto) {}
