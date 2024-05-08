import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({
    description: '名称',
  })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;
}

export class UpdateSkillDto extends CreateSkillDto {
  @ApiProperty({
    description: 'id',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'id不能为空' })
  id: number;
}
