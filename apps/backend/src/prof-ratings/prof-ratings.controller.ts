import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProfRatingDto } from './dto/create-prof-rating.dto';
import { UpdateProfRatingDto } from './dto/update-prof-rating.dto';
import { ProfRating } from './entities/prof-rating.entity';
import { ProfRatingsService } from './prof-ratings.service';

@Controller('prof-ratings')
@ApiTags('Prof Ratings')
export class ProfRatingsController {
  constructor(private readonly profRatingsService: ProfRatingsService) {}

  @Post()
  create(@Body() createProfRatingDto: CreateProfRatingDto): Promise<ProfRating> {
    return this.profRatingsService.create(createProfRatingDto);
  }

  @Get()
  findAll(): Promise<ProfRating[]> {
    return this.profRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ProfRating> {
    return this.profRatingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProfRatingDto: UpdateProfRatingDto): Promise<ProfRating> {
    return this.profRatingsService.update(id, updateProfRatingDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<ProfRating> {
    return this.profRatingsService.remove(id);
  }
}
