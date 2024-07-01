/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prof } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfessorDto: CreateProfessorDto): Promise<Prof> {
    return await this.prisma.prof.create({ data: createProfessorDto });
  }

  async findAll(): Promise<Prof[]> {
    return await this.prisma.prof.findMany();
  }

  async findOne(id: string): Promise<Prof> {
    const prof = await this.prisma.prof.findUnique({ where: { id: id } });
    if (!prof) throw new NotFoundException(`Professor with id ${id} not found.`);
    return prof;
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<Prof> {
    try {
      return this.prisma.prof.update({ where: { id: id }, data: updateProfessorDto });
    } catch {
      throw new NotFoundException(`Professor with id ${id} not found.`);
    }
  }

  async remove(id: string): Promise<Prof> {
    try {
      return await this.prisma.prof.delete({ where: { id: id } });
    } catch {
      throw new NotFoundException(`Professor with id ${id} not found.`);
    }
  }
}
