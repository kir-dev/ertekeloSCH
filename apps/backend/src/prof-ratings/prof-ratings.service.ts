import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateProfRatingDto } from './dto/create-prof-rating.dto';
import { UpdateProfRatingDto } from './dto/update-prof-rating.dto';
import { ProfRating } from './entities/prof-rating.entity';

@Injectable()
export class ProfRatingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProfRatingDto): Promise<ProfRating> {
    // TODO - get the current logged in user
    // TODO - throw an error if the user is not logged in
    return await this.prisma.profRating.create({
      data: {
        desc: data.desc,
        isAnon: data.isAnon,
        presentationRating: data.presentationRating,
        knowledgeRating: data.knowledgeRating,
        helpfulnessRating: data.helpfulnessRating,
        author: { connect: { authSchId: 'please_change_when_we_have_auth' } },
        prof: { connect: { id: data.profId } },
        subjectRating: { connect: { id: data.subjectRatingId } },
      },
    });
  }

  async findAll(): Promise<ProfRating[]> {
    return await this.prisma.profRating.findMany();
  }

  async findOne(id: number): Promise<ProfRating> {
    const profRating = await this.prisma.profRating.findUnique({ where: { id } });
    if (!profRating) {
      throw new NotFoundException(`ProfRating with id ${id} not found`);
    }
    return profRating;
  }

  async update(id: number, data: UpdateProfRatingDto): Promise<ProfRating> {
    // TODO - throw an error if the user is not logged in
    // TODO - only an admin or the author can update the prof rating
    try {
      return await this.prisma.profRating.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(`ProfRating with id ${id} not found`);
    }
  }

  async remove(id: number): Promise<ProfRating> {
    // TODO - throw an error if the user is not logged in
    // TODO - only an admin or the author can update the prof rating
    try {
      return await this.prisma.profRating.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`ProfRating with id ${id} not found`);
    }
  }
}
