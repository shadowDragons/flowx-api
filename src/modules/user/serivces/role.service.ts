import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CreateRoleDto,
  DeleteRoleDto,
  UpdateRoleDto,
} from '../dto/saveRole.dto';
import { QueryRoleAllDto } from '../dto/queryRole.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createtagDto: CreateRoleDto) {
    const data: Prisma.RoleCreateInput = {
      name: createtagDto.name,
    };
    return this.prismaService.role.create({
      data: data,
    });
  }

  async findAll(query: QueryRoleAllDto) {
    const skip = (query.current - 1) * query.pageSize;
    const data = await this.prismaService.role.findMany({
      where: {
        name: {
          contains: query.name,
        },
      },
      skip: skip,
      take: query.pageSize,
    });
    const total = await this.prismaService.role.count({
      where: {
        name: {
          contains: query.name,
        },
      },
    });
    return { data: data, total: total, success: true };
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

  remove(query: DeleteRoleDto) {
    return this.prismaService.role.deleteMany({
      where: {
        id: {
          in: query.ids,
        },
      },
    });
  }
}
