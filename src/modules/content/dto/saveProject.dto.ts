import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({
    description: '项目标题',
  })
  @IsNotEmpty({ message: '项目标题不能为空' })
  title: string;

  @ApiProperty({
    description: '项目类型',
  })
  @IsNotEmpty({ message: '项目类型不能为空' })
  type: number;

  @ApiProperty({
    description: '项目描述',
  })
  @IsNotEmpty({ message: '项目描述不能为空' })
  description: string;
}

export class UpdateProjectDto extends CreateProjectDto {
  @ApiProperty({
    description: '项目id',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: '项目id不能为空' })
  id: number;
}
