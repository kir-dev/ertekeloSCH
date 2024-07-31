import { applyDecorators, Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

import { RolesGuard } from '../roles.guard';

// TODO - Add guard which checks if user is admin or the user is the owner of the resource
// Will be used for CREATE, PATCH and DELETE requests

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
