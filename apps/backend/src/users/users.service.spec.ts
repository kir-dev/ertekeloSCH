import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'nestjs-prisma';

import { CreateUserDto } from './dto/create-use.dto';
import { User } from './entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;
  let userModel: User;

  const mockUsersService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // TODO - Need to mock the PrismaService
      providers: [PrismaService, UsersService, { provide: 'UserModel', useValue: userModel }],
      controllers: [UsersController],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userModel = module.get<User>('UserModel');
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
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
    expect(result).toEqual(userModel);
  });
});
