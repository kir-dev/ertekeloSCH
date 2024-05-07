import { Module } from '@nestjs/common';

import { ProfRatingsController } from './prof-ratings.controller';
import { ProfRatingsService } from './prof-ratings.service';

@Module({
  controllers: [ProfRatingsController],
  providers: [ProfRatingsService],
})
export class ProfRatingsModule {}
