import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './services/project.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SkillController } from './controllers/skill.controller';
import { SkillService } from './services/skill.service';
import { ProjectTagController } from './controllers/project.tag.controller';
import { ProjectTagService } from './services/project.tag.service';
import { RoleController } from './controllers/role.controller';
import { UserController } from './controllers/user.controller';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [
    ProjectController,
    SkillController,
    ProjectTagController,
    RoleController,
    UserController,
  ],
  providers: [
    ProjectService,
    PrismaService,
    SkillService,
    ProjectTagService,
    RoleService,
    UserService,
  ],
})
export class ContentModule {}
