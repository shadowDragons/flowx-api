import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PageParamDto {
  @ApiProperty({
    description: '页数',
  })
  @IsNotEmpty({ message: '页数不能为空' })
  @Type(() => Number)
  current: number;

  @ApiProperty({
    description: '每页数量',
  })
  @IsNotEmpty({ message: '每页数量不能为空' })
  @Type(() => Number)
  pageSize: number;
}
