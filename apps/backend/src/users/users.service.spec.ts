import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep } from 'jest-mock-extended';
import { PrismaService } from 'nestjs-prisma';

import { CreateUserDto } from './dto/create-use.dto';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;
  const mockPrismaService = mockDeep<PrismaService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // TODO - Need to mock the PrismaService
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
      //controllers: [UsersController],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  it('should  find all users', async () => {
    mockPrismaService.user.findMany.mockReturnValueOnce([]);
    const result = await usersService.findAll();
    expect(result).toEqual([]);
  });

  it('should create a user', async () => {
    const user: CreateUserDto = {
      email: 'test@gmail.com',
      major: 'SE',
      name: 'Test User',
      role: 'USER',
      desc: 'Test description',
    };

    const result = await usersService.create(user);
    expect(result).toEqual(user);
  });
});
