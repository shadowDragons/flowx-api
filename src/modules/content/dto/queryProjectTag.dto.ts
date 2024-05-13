import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { PageParamDto } from './pageParamDto.dto';

export class QueryProjectTagDto {
  @ApiProperty({
    description: 'id',
  })
  @IsNotEmpty({ message: 'id不能为空' })
  @Type(() => Number)
  id: number;
}

export class QueryProjectTagAllDto extends PageParamDto {}
