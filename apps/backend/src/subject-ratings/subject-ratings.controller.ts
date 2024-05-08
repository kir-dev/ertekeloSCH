import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { CreateSubjectRatingDto } from './dto/create-subject-rating.dto';
import { UpdateSubjectRatingDto } from './dto/update-subject-rating.dto';
import { SubjectRating } from './entities/subject-rating.entity';
import { SubjectRatingsService } from './subject-ratings.service';

@Controller('subject-ratings')
export class SubjectRatingsController {
  constructor(private readonly subjectRatingsService: SubjectRatingsService) {}

  @Post()
  create(@Body() createSubjectRatingDto: CreateSubjectRatingDto): Promise<SubjectRating> {
    return this.subjectRatingsService.create(createSubjectRatingDto);
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
