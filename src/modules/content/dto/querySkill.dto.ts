import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class QuerySkillDto {
  @ApiProperty({
    description: 'id',
  })
  @IsNotEmpty({ message: 'id不能为空' })
  @Type(() => Number)
  id: number;
}
