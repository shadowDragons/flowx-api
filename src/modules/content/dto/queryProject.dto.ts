import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class QueryProjectDto {
  @ApiProperty({
    description: '项目id',
  })
  @IsNotEmpty({ message: '项目id不能为空' })
  @Type(() => Number)
  id: number;
}
