import { MultipartFile } from '@fastify/multipart';
import { IsFile } from '../constraints';

export class UploadFileDto {
  @IsFile({
    mimetypes: [
      'image/png',
      'image/gif',
      'image/jpeg',
      'image/webp',
      'image/svg+xml',
    ],
    fileSize: 1024 * 1024 * 5,
  })
  file: MultipartFile;

  dir: string;
}
