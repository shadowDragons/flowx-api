import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './serivces/user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './serivces/role.service';

@Module({
  controllers: [UserController, RoleController],
  providers: [UserService, RoleService, PrismaService],
})
export class UserModule {}
