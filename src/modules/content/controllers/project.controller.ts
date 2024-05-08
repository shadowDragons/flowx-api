import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { CreateProjectDto } from '../dto/saveProject.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get('list')
  findAll() {
    return this.projectService.findAll();
  }
}
