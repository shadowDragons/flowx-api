import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateRoleDto,
  DeleteRoleDto,
  UpdateRoleDto,
} from '../dto/saveRole.dto';
import { QueryRoleAllDto } from '../dto/queryRole.dto';
import { RoleService } from '../serivces/role.service';
import { Public } from 'src/modules/auth/auth.guard';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Public()
  @Post('create')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
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
    query: QueryRoleAllDto,
  ) {
    return this.roleService.findAll(query);
  }

  @Post('update')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(updateRoleDto);
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
    query: DeleteRoleDto,
  ) {
    return this.roleService.remove(query);
  }
}
