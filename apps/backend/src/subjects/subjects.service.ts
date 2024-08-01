// TODO: Fix the import sort. The imports are sorted one way when running autofix, but when vscode saves, it sorts them another way.
/* eslint-disable simple-import-sort/imports */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateSubjectDto } from './dto/create-subject.dto';
import { SubjectWithRatings } from './entities/subject-with-ratings.entity';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return await this.prisma.subject.create({
      data: {
        name: createSubjectDto.name,
        subjectCode: createSubjectDto.subjectCode,
        desc: createSubjectDto.desc,
        department: { connect: { id: createSubjectDto.departmentId } },
      },
    });
  }

  /**
   * @param includeRatings If true, includes ratings in the response
   * @returns All subjects
   */
  async findAll(includeRatings?: boolean): Promise<Subject[]> {
    if (includeRatings === true) {
      return await this.prisma.subject.findMany({
        include: {
          ratings: true,
        },
      });
    }
    return await this.prisma.subject.findMany();
  }

  async findOne(id: number): Promise<SubjectWithRatings> {
    const subject = await this.prisma.subject.findUnique({
      where: { id },
      include: { ratings: true },
    });
    if (!subject) {
      throw new NotFoundException(`Subject with id ${id} not found`);
    }
    return subject;
  }

  async search(query: string): Promise<Subject[]> {
    return await this.prisma.subject.findMany({
      where: {
        name: {
          search: query,
        },
      },
      orderBy: {
        _relevance: {
          fields: ['name'],
          search: query.replace(/[\s\n\t]/g, '_'),
          sort: 'asc',
        },
      },
    });
  }
}
