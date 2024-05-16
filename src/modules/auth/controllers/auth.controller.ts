import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';
import { Public } from '../auth.guard';
import { OssService } from '../services/oss.service';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly ossService: OssService,
  ) {}

  @Post('login')
  @Public()
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('oss')
  oss() {
    return this.ossService.findAll();
  }
}
