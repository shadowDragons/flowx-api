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
  DeleteProjectTagDto,
  UpdateProjectTagDto,
} from '../dto/saveProjectTag.dto';
import { ProjectTagService } from '../services/project.tag.service';
import { QueryProjectTagAllDto } from '../dto/queryProjectTag.dto';

@Controller('project-tag')
export class ProjectTagController {
  constructor(private readonly projectTagService: ProjectTagService) {}

  @Post('create')
  create(@Body() createProjectTagDto: CreateProjectTagDto) {
    return this.projectTagService.create(createProjectTagDto);
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
    query: QueryProjectTagAllDto,
  ) {
    return this.projectTagService.findAll(query);
  }

  @Post('update')
  update(@Body() updateProjectTagDto: UpdateProjectTagDto) {
    return this.projectTagService.update(updateProjectTagDto);
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
    query: DeleteProjectTagDto,
  ) {
    return this.projectTagService.remove(query);
  }
}
