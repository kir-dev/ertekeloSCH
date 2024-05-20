import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/CurrentUser.decorator';
import { JwtAuth } from 'src/auth/decorators/JwtAuth';
import { User } from 'src/users/entity/user.entity';

import { CreateSubjectRatingDto } from './dto/create-subject-rating.dto';
import { UpdateSubjectRatingDto } from './dto/update-subject-rating.dto';
import { SubjectRating } from './entities/subject-rating.entity';
import { SubjectRatingsService } from './subject-ratings.service';

@Controller('subject-ratings')
@JwtAuth()
@ApiTags('Subject Ratings')
export class SubjectRatingsController {
  constructor(private readonly subjectRatingsService: SubjectRatingsService) {}

  @Post()
  create(@Body() createSubjectRatingDto: CreateSubjectRatingDto, @CurrentUser() user: User): Promise<SubjectRating> {
    return this.subjectRatingsService.create(createSubjectRatingDto, user);
  }

  @Get()
  findAll(): Promise<SubjectRating[]> {
    return this.subjectRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<SubjectRating> {
    return this.subjectRatingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSubjectRatingDto): Promise<SubjectRating> {
    return this.subjectRatingsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<SubjectRating> {
    return this.subjectRatingsService.remove(id);
  }
}
