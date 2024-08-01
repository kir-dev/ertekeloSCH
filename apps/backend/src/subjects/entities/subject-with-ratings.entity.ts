import { IsArray } from 'class-validator';
import { SubjectRating } from 'src/subject-ratings/entities/subject-rating.entity';

import { Subject } from './subject.entity';

export class SubjectWithRatings extends Subject {
  @IsArray()
  ratings: SubjectRating[];
}
