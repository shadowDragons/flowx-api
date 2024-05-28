import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UploadFileService {
  constructor(private readonly prismaService: PrismaService) {}

  async detail(id: number) {
    return await this.prismaService.uploadFile.findFirst({
      where: {
        id: id,
      },
    });
  }

  create(path: string) {
    const data: Prisma.UploadFileCreateInput = {
      path: path,
    };
    return this.prismaService.uploadFile.create({
      data: data,
    });
  }
}
