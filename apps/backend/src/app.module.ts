import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProfRatingsModule } from './prof-ratings/prof-ratings.module';
import { SubjectRatingsModule } from './subject-ratings/subject-ratings.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), UsersModule, SubjectRatingsModule, ProfRatingsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
