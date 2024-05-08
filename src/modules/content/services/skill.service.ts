import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateSkillDto, UpdateSkillDto } from '../dto/saveSkill.dto';
import { QuerySkillDto } from '../dto/querySkill.dto';

@Injectable()
export class SkillService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSkillDto: CreateSkillDto) {
    const data: Prisma.SkillCreateInput = {
      name: createSkillDto.name,
    };
    return this.prismaService.skill.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.skill.findMany({ where: {} });
  }

  findOne(query: QuerySkillDto) {
    return this.prismaService.skill.findUnique({
      where: {
        id: query.id,
      },
    });
  }

  update(updateSkillDto: UpdateSkillDto) {
    const data: Prisma.SkillUpdateInput = {
      name: updateSkillDto.name,
    };
    return this.prismaService.project.update({
      where: { id: updateSkillDto.id },
      data: data,
    });
  }

  remove(query: QuerySkillDto) {
    return this.prismaService.skill.delete({ where: { id: query.id } });
  }
}
