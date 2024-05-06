import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectRatingsModule } from './subject-ratings/subject-ratings.module';
import { UsersModule } from './users/users.module';
import { ProfRatingsModule } from './prof-ratings/prof-ratings.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), UsersModule, SubjectRatingsModule, ProfRatingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
