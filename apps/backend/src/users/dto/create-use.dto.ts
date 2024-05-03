import { OmitType } from '@nestjs/swagger';

import { User } from '../entity/user.entity';

export class CreateUserDto extends OmitType(User, ['authSchId', 'createdAt', 'updatedAt']) {}
