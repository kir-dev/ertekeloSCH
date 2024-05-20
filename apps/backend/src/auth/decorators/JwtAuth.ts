import { applyDecorators, Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

import { RolesGuard } from '../roles.guard';

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
export class JwtOptionalAuthGuard extends AuthGuard('jwt') {
  handleRequest<UserEntity>(_: any, user: UserEntity): UserEntity {
    return user;
  }
}

export function JwtAuth() {
  return applyDecorators(UseGuards(JwtAuthGuard), ApiBearerAuth(), UseGuards(RolesGuard));
}
