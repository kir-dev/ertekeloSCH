import { Module } from '@nestjs/common';
import { ProfRatingsService } from './prof-ratings.service';
import { ProfRatingsController } from './prof-ratings.controller';

@Module({
  controllers: [ProfRatingsController],
  providers: [ProfRatingsService],
})
export class ProfRatingsModule {}
