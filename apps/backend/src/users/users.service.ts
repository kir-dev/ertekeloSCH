import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateUserDto } from './dto/create-use.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { authSchId: id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      return this.prisma.user.update({ where: { authSchId: id }, data: updateUserDto });
    } catch {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async remove(id: string): Promise<User> {
    try {
      return await this.prisma.user.delete({ where: { authSchId: id } });
    } catch {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
