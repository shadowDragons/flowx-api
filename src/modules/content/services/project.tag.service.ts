import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CreateProjectTagDto,
  UpdateProjectTagDto,
} from '../dto/saveProjectTag.dto';
import { QueryProjectTagDto } from '../dto/queryProjectTag.dto';

@Injectable()
export class ProjectTagService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createtagDto: CreateProjectTagDto) {
    const data: Prisma.ProjectTagCreateInput = {
      name: createtagDto.name,
    };
    return this.prismaService.projectTag.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.projectTag.findMany({ where: {} });
  }

  findOne(query: QueryProjectTagDto) {
    return this.prismaService.projectTag.findUnique({
      where: {
        id: query.id,
      },
    });
  }

  update(updatetagDto: UpdateProjectTagDto) {
    const data: Prisma.ProjectTagUpdateInput = {
      name: updatetagDto.name,
    };
    return this.prismaService.projectTag.update({
      where: { id: updatetagDto.id },
      data: data,
    });
  }

  remove(query: QueryProjectTagDto) {
    return this.prismaService.projectTag.delete({ where: { id: query.id } });
  }
}
