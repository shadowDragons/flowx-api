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
