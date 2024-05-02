import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './modules/content/content.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ContentModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
