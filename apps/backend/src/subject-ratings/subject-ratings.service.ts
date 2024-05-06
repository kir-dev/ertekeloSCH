import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateSubjectRatingDto } from './dto/create-subject-rating.dto';
import { UpdateSubjectRatingDto } from './dto/update-subject-rating.dto';
import { SubjectRating } from './entities/subject-rating.entity';

@Injectable()
export class SubjectRatingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSubjectRatingDto): Promise<SubjectRating> {
    return await this.prisma.subjectRating.create({ data });
  }

  async findAll() {
    return await this.prisma.subjectRating.findMany();
  }

  async findOne(id: number) {
    const subjectRating = await this.prisma.subjectRating.findUnique({ where: { id } });
    if (!subjectRating) {
      throw new NotFoundException(`SubjectRating with id ${id} not found`);
    }
    return subjectRating;
  }

  async update(id: number, data: UpdateSubjectRatingDto) {
    try {
      return await this.prisma.subjectRating.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(`SubjectRating with id ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.subjectRating.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`SubjectRating with id ${id} not found`);
    }
  }
}
