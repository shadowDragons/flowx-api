import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: '姓名',
  })
  @IsNotEmpty({ message: '姓名不能为空' })
  username: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty({ message: '密码不能为空' })
  pass: string;

  @ApiProperty({
    description: '角色',
  })
  @IsNotEmpty({ message: '角色不能为空' })
  roles: number[];
}

export class UpdateUserDto extends CreateUserDto {
  @ApiProperty({
    description: 'id',
  })
  @Type(() => Number)
  @IsNotEmpty({ message: 'id不能为空' })
  id: number;
}
