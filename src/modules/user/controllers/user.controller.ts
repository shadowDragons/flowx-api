import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../user/dto/saveUser.dto';
import { UserService } from '../serivces/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('list')
  findAll() {
    return this.userService.findAll();
  }
}
