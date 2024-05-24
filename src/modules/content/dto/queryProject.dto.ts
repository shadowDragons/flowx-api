import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PageParamDto } from './pageParamDto.dto';
import { IsOptional } from 'class-validator';

export class QueryProjectDto extends PageParamDto {
  @ApiProperty({
    description: 'id',
  })
  @Type(() => Number)
  @IsOptional()
  id?: number;

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


export class QueryProjectDetailDto {
  @ApiProperty({
    description: 'id',
  })
  @Type(() => Number)
  id: number;
}
