// TODO: Fix the import sort. The imports are sorted one way when running autofix, but when vscode saves, it sorts them another way.
/* eslint-disable simple-import-sort/imports */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectWithRatings } from './entities/subject-with-ratings.entity';
import { Subject } from './entities/subject.entity';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  findAll(@Query('ratings') ratings?: boolean): Promise<Subject[]> {
    return this.subjectsService.findAll(ratings);
  }

  @Get('search')
  search(@Query('query') query: string): Promise<Subject[]> {
    return this.subjectsService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubjectWithRatings | null> {
    return this.subjectsService.findOne(Number(id));
  }
}
