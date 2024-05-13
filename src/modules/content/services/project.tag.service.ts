import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CreateProjectTagDto,
  UpdateProjectTagDto,
} from '../dto/saveProjectTag.dto';
import {
  QueryProjectTagAllDto,
  QueryProjectTagDto,
} from '../dto/queryProjectTag.dto';

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

  async findAll(query: QueryProjectTagAllDto) {
    const skip = (query.current - 1) * query.pageSize;

    const data = await this.prismaService.projectTag.findMany({
      skip: skip,
      take: query.pageSize,
    });
    const total = await this.prismaService.projectTag.count();
    return { data: data, total: total, success: true };
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
