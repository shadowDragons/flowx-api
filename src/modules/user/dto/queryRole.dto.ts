import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { PageParamDto } from './pageParamDto.dto';

export class QueryRoleDto {
  @ApiProperty({
    description: 'id',
  })
  @IsNotEmpty({ message: 'id不能为空' })
  @Type(() => Number)
  id: number;
}

export class QueryRoleAllDto extends PageParamDto {
  @ApiProperty({
    description: 'ids',
  })
  @Type(() => Number)
  @IsOptional()
  ids?: number[];

  @ApiProperty({
    description: 'name',
  })
  @IsOptional()
  name: string;
}
