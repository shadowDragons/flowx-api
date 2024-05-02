import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SaveProjectDto {
  @ApiProperty({
    description: '项目标题',
  })
  @IsNotEmpty({ message: '项目标题不能为空' })
  title: string;

  @ApiProperty({
    type: '项目类型',
  })
  @IsNotEmpty({ message: '项目类型不能为空' })
  type: number;

  @ApiProperty({
    description: '项目描述',
  })
  @IsNotEmpty({ message: '项目描述不能为空' })
  description: string;
}
