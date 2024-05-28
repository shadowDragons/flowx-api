import { Module } from '@nestjs/common';
import { FileController } from './controllers/file.controller';
import { MediaService } from './services';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadFileService } from './services/upload.file.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

@Module({
  imports: [FastifyMulterModule],
  controllers: [FileController],
  providers: [MediaService, PrismaService, UploadFileService],
})
export class MediaModule {}
