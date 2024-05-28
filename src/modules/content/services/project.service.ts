import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateProjectDto,
  DeleteProjectDto,
  UpdateProjectDto,
} from '../dto/saveProject.dto';
import { Prisma } from '@prisma/client';
import { QueryProjectDto } from '../dto/queryProject.dto';
import { join } from 'path';
@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    const connectTags = createProjectDto.tags.map((tag) => {
      return { id: tag };
    });
    const connectSkills = createProjectDto.skills.map((skill) => {
      return { id: skill };
    });
    const connectImgs = createProjectDto.imgs.map((img) => {
      return { id: img };
    });
    const data: Prisma.ProjectCreateInput = {
      title: createProjectDto.title,
      description: createProjectDto.description,
      tags: {
        connect: connectTags,
      },
      skills: {
        connect: connectSkills,
      },
      imgs: {
        connect: connectImgs,
      },
    };
    return this.prismaService.project.create({
      data: data,
      include: { tags: true, skills: true, imgs: true },
    });
  }

  async findAll(query: QueryProjectDto) {
    const skip = (query.current - 1) * query.pageSize;
    const data = await this.prismaService.project.findMany({
      include: {
        tags: true,
        imgs: true,
        skills: true,
      },
      where: {
        title: {
          contains: query.name,
        },
      },
      skip: skip,
      take: query.pageSize,
    });
    const total = await this.prismaService.project.count({
      where: {
        title: {
          contains: query.name,
        },
      },
    });
    const out = data.map((v) => {
      const tags = v.tags.map((tag) => {
        return {
          id: tag.id,
          name: tag.name,
        };
      });
      const skills = v.skills.map((skill) => {
        return {
          id: skill.id,
          name: skill.name,
        };
      });
      const imgs = v.imgs.map((img) => {
        return {
          id: img.id,
          path: process.env.HOST + join(process.env.MEDIA_UPLOAD_DIR, img.path),
        };
      });
      return { ...v, tags, skills, imgs };
    });
    return { data: out, total: total, success: true };
  }

  async getIDs() {
    return await this.prismaService.project.findMany({
      select: {
        id: true,
      },
    });
  }

  async update(updateProjectDto: UpdateProjectDto) {
    const updateTags = updateProjectDto.tags.map((tag) => {
      return { id: tag };
    });
    const updateSkills = updateProjectDto.skills.map((skill) => {
      return { id: skill };
    });
    const updateImgs = updateProjectDto.imgs.map((img) => {
      return { id: img };
    });

    return await this.prismaService.project.update({
      where: {
        id: updateProjectDto.id,
      },
      data: {
        title: updateProjectDto.title,
        description: updateProjectDto.description,
        tags: {
          set: updateTags,
        },
        skills: {
          set: updateSkills,
        },
        imgs: {
          set: updateImgs,
        },
      },
      include: {
        tags: true,
        skills: true,
        imgs: true,
      },
    });
  }

  remove(query: DeleteProjectDto) {
    return this.prismaService.project.deleteMany({
      where: {
        id: {
          in: query.ids,
        },
      },
    });
  }

  async detail(id: number) {
    return await this.prismaService.project.findFirst({
      select: {
        id: true,
        title: true,
        description: true,
      },
      where: { id: Number(id) },
    });
  }
}
