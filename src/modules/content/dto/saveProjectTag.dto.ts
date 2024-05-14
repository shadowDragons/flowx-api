import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectTagDto {
  @ApiProperty({
    description: '名称',
  })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;
}

export class UpdateProjectTagDto extends CreateProjectTagDto {
  @ApiProperty({
    description: 'id',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'id不能为空' })
  id: number;
}

export class DeleteProjectTagDto {
  @ApiProperty({
    description: 'ids',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'ids不能为空' })
  ids: number[];
}
