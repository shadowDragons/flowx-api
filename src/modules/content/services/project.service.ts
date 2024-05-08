import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from '../dto/saveProject.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    const data: Prisma.ProjectCreateInput = {
      title: createProjectDto.title,
      description: createProjectDto.description,
      tags: {
        create: [{ projectTag: { connect: { id: 1 } } }],
      },
      skills: {
        create: [{ skill: { connect: { id: 1 } } }],
      },
    };
    return this.prismaService.project.create({
      data: data,
    });
  }

  findAll() {
    return this.prismaService.project.findMany({ where: {} });
  }
}
