import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './services/project.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SkillController } from './controllers/skill.controller';
import { SkillService } from './services/skill.service';
import { ProjectTagController } from './controllers/project.tag.controller';
import { ProjectTagService } from './services/project.tag.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [ProjectController, SkillController, ProjectTagController],
  providers: [
    ProjectService,
    PrismaService,
    SkillService,
    ProjectTagService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class ContentModule {}
