import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { SkillService } from '../services/skill.service';
import {
  CreateSkillDto,
  DeleteSkillDto,
  UpdateSkillDto,
} from '../dto/saveSkill.dto';
import { QuerySkillAllDto } from '../dto/querySkill.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post('create')
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
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
    query: QuerySkillAllDto,
  ) {
    return this.skillService.findAll(query);
  }

  @Post('update')
  update(@Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(updateSkillDto);
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
    query: DeleteSkillDto,
  ) {
    return this.skillService.remove(query);
  }
}
