import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateProjectTagDto,
  UpdateProjectTagDto,
} from '../dto/saveProjectTag.dto';
import { ProjectTagService } from '../services/project.tag.service';
import { QueryProjectTagDto } from '../dto/queryProjectTag.dto';

@Controller('project-tag')
export class ProjectTagController {
  constructor(private readonly projectTagService: ProjectTagService) {}

  @Post('create')
  create(@Body() createProjectTagDto: CreateProjectTagDto) {
    return this.projectTagService.create(createProjectTagDto);
  }

  @Get('list')
  findAll() {
    return this.projectTagService.findAll();
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
    query: QueryProjectTagDto,
  ) {
    return this.projectTagService.findOne(query);
  }

  @Post('update')
  update(@Body() updateProjectTagDto: UpdateProjectTagDto) {
    return this.projectTagService.update(updateProjectTagDto);
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
    query: QueryProjectTagDto,
  ) {
    return this.projectTagService.remove(query);
  }
}
