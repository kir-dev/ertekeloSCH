import { Module } from '@nestjs/common';

import { SubjectRatingsController } from './subject-ratings.controller';
import { SubjectRatingsService } from './subject-ratings.service';

@Module({
  controllers: [SubjectRatingsController],
  providers: [SubjectRatingsService],
})
export class SubjectRatingsModule {}
