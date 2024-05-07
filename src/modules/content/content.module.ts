import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './services/project.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService],
})
export class ContentModule {}
