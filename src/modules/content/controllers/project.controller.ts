import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import {
  CreateProjectDto,
  DeleteProjectDto,
  UpdateProjectDto,
} from '../dto/saveProject.dto';
import { QueryProjectDetailDto, QueryProjectDto } from '../dto/queryProject.dto';
import { Public } from 'src/modules/auth/auth.guard';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Public()
  @Get('ids')
  ids() {
    return this.projectService.getIDs();
  }

  @Public()
  @Get('detail/:id')
  detail(
    @Param('id') id:number
  ) {
    return this.projectService.detail(id);
  }

  @Get('list')
  findAll(
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
    return this.projectService.findAll(query);
  }

  @Post('update')
  update(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: { target: false },
      }),
    )
    updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.update(updateProjectDto);
  }

  @Post('delete')
  remove(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        validationError: { target: false },
      }),
    )
    query: DeleteProjectDto,
  ) {
    return this.projectService.remove(query);
  }
}
