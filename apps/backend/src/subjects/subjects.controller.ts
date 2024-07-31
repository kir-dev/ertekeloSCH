import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateSubjectDto } from './dto/create-subject.dto';
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
  findAll(): Promise<Subject[]> {
    return this.subjectsService.findAll();
  }

  @Get('search')
  search(@Query('query') query: string): Promise<Subject[]> {
    return this.subjectsService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subject | null> {
    return this.subjectsService.findOne(Number(id));
  }
}
