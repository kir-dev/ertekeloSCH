import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateSubjectDto } from './dto/create-subject.dto';
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

  async findAll(): Promise<Subject[]> {
    return await this.prisma.subject.findMany();
  }

  async findOne(id: number): Promise<Subject> {
    const subject = await this.prisma.subject.findUnique({ where: { id } });
    if (!subject) {
      throw new NotFoundException(`Subject with id ${id} not found`);
    }
    return subject;
  }

  async search(query: string): Promise<Subject[]> {
    return await this.prisma.subject.findMany({
      // where: {
      //   name: {
      //     search: query,
      //   },
      // },
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
