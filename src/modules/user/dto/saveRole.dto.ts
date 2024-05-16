import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    description: '名称',
  })
  @IsNotEmpty({ message: '名称不能为空' })
  name: string;
}

export class UpdateRoleDto extends CreateRoleDto {
  @ApiProperty({
    description: 'id',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'id不能为空' })
  id: number;
}

export class DeleteRoleDto {
  @ApiProperty({
    description: 'ids',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'ids不能为空' })
  ids: number[];
}
