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
    description: '项目描述',
  })
  @IsNotEmpty({ message: '项目描述不能为空' })
  description: string;

  @ApiProperty({
    description: '标签',
  })
  @IsNotEmpty({ message: '标签不能为空' })
  tags: number[];

  @ApiProperty({
    description: '图片',
  })
  imgs: number[];

  @ApiProperty({
    description: '技能',
  })
  @IsNotEmpty({ message: '标签不能为空' })
  skills: number[];
}

export class UpdateProjectDto extends CreateProjectDto {
  @ApiProperty({
    description: '项目id',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: '项目id不能为空' })
  id: number;
}

export class DeleteProjectDto {
  @ApiProperty({
    description: 'ids',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'ids不能为空' })
  ids: number[];
}
