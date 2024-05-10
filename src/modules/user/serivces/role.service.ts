import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateRoleDto, UpdateRoleDto } from '../dto/saveRole.dto';
import { QueryRoleDto } from '../dto/queryRole.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    const data: Prisma.RoleCreateInput = {
      name: createRoleDto.name,
    };
    return this.prismaService.role.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.role.findMany({ where: {} });
  }

  findOne(query: QueryRoleDto) {
    return this.prismaService.role.findUnique({
      where: {
        id: query.id,
      },
    });
  }

  update(updateRoleDto: UpdateRoleDto) {
    const data: Prisma.RoleUpdateInput = {
      name: updateRoleDto.name,
    };
    return this.prismaService.role.update({
      where: { id: updateRoleDto.id },
      data: data,
    });
  }

  remove(query: QueryRoleDto) {
    return this.prismaService.role.delete({ where: { id: query.id } });
  }
}
