import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SaveProjectDto } from '../dto/saveProject.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  create(saveProjectDto: SaveProjectDto) {
    const data: Prisma.ProjectCreateInput = {
      title: saveProjectDto.title,
      description: saveProjectDto.description,
      type: saveProjectDto.type,
      status: 1,
    };
    return this.prismaService.project.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.project.findMany({ where: {} });
  }

  findOne(id: number) {
    return this.prismaService.project.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, saveProjectDto: SaveProjectDto) {
    const data: Prisma.ProjectCreateInput = {
      title: saveProjectDto.title,
      description: saveProjectDto.description,
      type: saveProjectDto.type,
      status: 1,
    };
    return this.prismaService.project.update({
      where: { id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prismaService.project.delete({ where: { id } });
  }
}
