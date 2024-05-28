import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MediaService } from '../services';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/modules/auth/auth.guard';
import { FileInterceptor } from '@nest-lab/fastify-multer';

@Public()
@Controller('file')
export class FileController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('/upload-project-img')
  @ApiOperation({ summary: 'Uploads a single file' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        dir: {
          type: 'string',
        },
      },
    },
  })
  async upload(@UploadedFile() file: File) {
    return await this.mediaService.upload(file, 'project');
  }
}
