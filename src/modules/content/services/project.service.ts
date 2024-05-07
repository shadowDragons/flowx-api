import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from '../dto/saveProject.dto';
import { Prisma } from '@prisma/client';
import { QueryProjectDto } from '../dto/queryProject.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    const data: Prisma.ProjectCreateInput = {
      title: createProjectDto.title,
      description: createProjectDto.description,
      type: createProjectDto.type,
      status: 1,
    };
    return this.prismaService.project.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.project.findMany({ where: {} });
  }

  findOne(query: QueryProjectDto) {
    return this.prismaService.project.findUnique({
      where: {
        id: query.id,
      },
    });
  }

  update(updateProjectDto: UpdateProjectDto) {
    const data: Prisma.ProjectCreateInput = {
      title: updateProjectDto.title,
      description: updateProjectDto.description,
      type: updateProjectDto.type,
      status: 1,
    };
    return this.prismaService.project.update({
      where: { id: updateProjectDto.id },
      data: data,
    });
  }

  remove(query: QueryProjectDto) {
    return this.prismaService.project.delete({ where: { id: query.id } });
  }
}
