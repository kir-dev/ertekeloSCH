import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { authSchId: id } });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<User | null> {
    return this.prisma.user.update({ where: { authSchId: id }, data: updateUserDto });
  }

  async remove(id: string): Promise<User | null> {
    return this.prisma.user.delete({ where: { authSchId: id } });
  }
}
