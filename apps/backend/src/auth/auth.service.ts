import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

import { OAuthUser } from './OauthUser';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  login(user: User): { jwt: string } {
    return {
      jwt: this.jwtService.sign(user, {
        secret: process.env.JWT_ACCESSTOKEN_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
      }),
    };
  }
  async findOrCreateUser(oAuthUser: OAuthUser) {
    try {
      const user = await this.userService.findOne(oAuthUser.internal_id);
      return user;
    } catch (e) {
      if (e instanceof NotFoundException) {
        const newUser = await this.userService.create({
          authSchId: oAuthUser.internal_id,
          name: oAuthUser.displayName,
        });
        return newUser;
      }
      throw e;
    }
  }
}
