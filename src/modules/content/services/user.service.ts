import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from '../dto/saveUser.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const salt: string = await bcrypt.genSalt();
    const pass: string = await bcrypt.hash(createUserDto.pass, salt);
    const data: Prisma.UserCreateInput = {
      username: createUserDto.username,
      pass: pass,
      salt: salt,
      roles: {
        create: [{ role: { connect: { id: 1 } } }],
      },
    };
    return this.prismaService.user.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.user.findMany({ where: {} });
  }
}
