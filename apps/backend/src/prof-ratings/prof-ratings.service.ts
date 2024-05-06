import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateProfRatingDto } from './dto/create-prof-rating.dto';
import { UpdateProfRatingDto } from './dto/update-prof-rating.dto';
import { ProfRating } from './entities/prof-rating.entity';

@Injectable()
export class ProfRatingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProfRatingDto): Promise<ProfRating> {
    return await this.prisma.profRating.create({ data });
  }

  async findAll(): Promise<ProfRating[]> {
    return await this.prisma.profRating.findMany();
  }

  async findOne(id: number): Promise<ProfRating | null> {
    const profRating = await this.prisma.profRating.findUnique({ where: { id } });
    if (!profRating) {
      throw new NotFoundException(`ProfRating with id ${id} not found`);
    }
    return profRating;
  }

  async update(id: number, data: UpdateProfRatingDto): Promise<ProfRating | null> {
    try {
      return await this.prisma.profRating.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(`ProfRating with id ${id} not found`);
    }
  }

  async remove(id: number): Promise<ProfRating | null> {
    try {
      return await this.prisma.profRating.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`ProfRating with id ${id} not found`);
    }
  }
}
