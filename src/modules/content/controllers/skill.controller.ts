import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSkillDto, UpdateSkillDto } from '../dto/saveSkill.dto';
import { SkillService } from '../services/skill.service';
import { QuerySkillDto } from '../dto/querySkill.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post('create')
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get('list')
  findAll() {
    return this.skillService.findAll();
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
    query: QuerySkillDto,
  ) {
    return this.skillService.findOne(query);
  }

  @Post('update')
  update(@Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(updateSkillDto);
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
    query: QuerySkillDto,
  ) {
    return this.skillService.remove(query);
  }
}
