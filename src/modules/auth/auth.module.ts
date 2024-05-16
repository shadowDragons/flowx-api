import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/serivces/user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { OssService } from './services/oss.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, OssService],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7200s' },
    }),
  ],
})
export class AuthModule {}
