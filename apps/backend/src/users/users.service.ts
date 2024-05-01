import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { authSchId: id } });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<User | null> {
    return this.prisma.user.update({ where: { authSchId: id }, data: updateUserDto });
  }

  remove(id: string): Promise<User | null> {
    return this.prisma.user.delete({ where: { authSchId: id } });
  }
}
