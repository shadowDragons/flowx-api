import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CreateSkillDto,
  DeleteSkillDto,
  UpdateSkillDto,
} from '../dto/saveSkill.dto';
import { QuerySkillAllDto } from '../dto/querySkill.dto';

@Injectable()
export class SkillService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createtagDto: CreateSkillDto) {
    const data: Prisma.SkillCreateInput = {
      name: createtagDto.name,
    };
    return this.prismaService.skill.create({
      data: data,
    });
  }

  async findAll(query: QuerySkillAllDto) {
    const skip = (query.current - 1) * query.pageSize;
    const data = await this.prismaService.skill.findMany({
      where: {
        name: {
          contains: query.name,
        },
      },
      skip: skip,
      take: query.pageSize,
    });
    const total = await this.prismaService.skill.count({
      where: {
        name: {
          contains: query.name,
        },
      },
    });
    return { data: data, total: total, success: true };
  }

  update(updateSkillDto: UpdateSkillDto) {
    const data: Prisma.SkillUpdateInput = {
      name: updateSkillDto.name,
    };
    return this.prismaService.skill.update({
      where: { id: updateSkillDto.id },
      data: data,
    });
  }

  remove(query: DeleteSkillDto) {
    return this.prismaService.skill.deleteMany({
      where: {
        id: {
          in: query.ids,
        },
      },
    });
  }
}
