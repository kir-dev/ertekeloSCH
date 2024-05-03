import { ApiProperty } from '@nestjs/swagger';
import { Major, Role } from '@prisma/client';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

//import { Major } from './major';
//import { Role } from './role';

export class User {
  @IsString()
  @ApiProperty()
  authSchId: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEnum(Role)
  @ApiProperty({ type: 'enum', enum: Role })
  role: Role;

  @IsEnum(Major)
  @ApiProperty({ type: 'enum', enum: Major })
  major: Major;

  @IsString()
  @IsOptional()
  @ApiProperty()
  desc: string;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
