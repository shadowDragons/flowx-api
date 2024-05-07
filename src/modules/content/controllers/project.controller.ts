import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { CreateProjectDto, UpdateProjectDto } from '../dto/saveProject.dto';
import { QueryProjectDto } from '../dto/queryProject.dto';

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

  @Get('detail')
  findOne(
    @Query(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: { target: false },
      }),
    )
    query: QueryProjectDto,
  ) {
    return this.projectService.findOne(query);
  }

  @Post('update')
  update(@Body() updateBookDto: UpdateProjectDto) {
    return this.projectService.update(updateBookDto);
  }

  @Post('delete')
  remove(
    @Query(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: { target: false },
      }),
    )
    query: QueryProjectDto,
  ) {
    return this.projectService.remove(query);
  }
}
