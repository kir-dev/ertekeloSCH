import { ApiProperty } from '@nestjs/swagger';
import { Major, Role } from '@prisma/client';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class User {
  @IsString()
  authSchId: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Role)
  @ApiProperty({ enum: Role })
  role: Role;

  @IsEnum(Major)
  @ApiProperty({ enum: Major })
  major: Major;

  @IsString()
  @IsOptional()
  desc: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
