import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/entity/user.entity';

import { CreateSubjectRatingDto } from './dto/create-subject-rating.dto';
import { UpdateSubjectRatingDto } from './dto/update-subject-rating.dto';
import { SubjectRating } from './entities/subject-rating.entity';

@Injectable()
export class SubjectRatingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSubjectRatingDto, user: User): Promise<SubjectRating> {
    // TODO - get the current logged in user
    // TODO - throw an error if the user is not logged in
    return await this.prisma.subjectRating.create({
      data: {
        desc: data.desc,
        isAnon: data.isAnon,
        difficultyRating: data.difficultyRating,
        interestRating: data.interestRating,
        usefulnessRating: data.usefulnessRating,
        author: { connect: { authSchId: user.authSchId } },
      },
    });
  }

  async findAll(): Promise<SubjectRating[]> {
    return await this.prisma.subjectRating.findMany();
  }

  async findOne(id: number): Promise<SubjectRating> {
    const subjectRating = await this.prisma.subjectRating.findUnique({ where: { id } });
    if (!subjectRating) {
      throw new NotFoundException(`SubjectRating with id ${id} not found`);
    }
    return subjectRating;
  }

  async update(id: number, data: UpdateSubjectRatingDto): Promise<SubjectRating> {
    // TODO - throw an error if the user is not logged in
    // TODO - only an admin or the author can update the subject rating
    try {
      return await this.prisma.subjectRating.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(`SubjectRating with id ${id} not found`);
    }
  }

  async remove(id: number): Promise<SubjectRating> {
    try {
      // TODO - throw an error if the user is not logged in
      // TODO - only an admin or the author can delete the subject rating
      return await this.prisma.subjectRating.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`SubjectRating with id ${id} not found`);
    }
  }
}
