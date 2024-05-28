import { extname, join } from 'path';

import { Injectable, NotFoundException, StreamableFile } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { createReadStream, existsSync } from 'fs-extra';

import { lookup } from 'mime-types';
import { uploadLocalFile } from '../helpers';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadFileType } from '../types';
import { UploadFileService } from './upload.file.service';

/**
 * 文件服务
 */
@Injectable()
export class MediaService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly uploadFileService: UploadFileService,
  ) {}

  /**
   * 加载图片
   * @param id 图片ID
   * @param res http响应实例
   * @param ext 图片后缀
   */
  async loadProjectImage(id: number, res: FastifyReply, ext?: string) {
    const media = await this.uploadFileService.detail(id);
    const filePath = join(
      process.env.PUBLIC_DIR,
      process.env.MEDIA_UPLOAD_DIR,
      media.path,
    );
    if (!existsSync(filePath) || (ext && extname(filePath) !== ext)) {
      throw new NotFoundException('file not exists!');
    }
    const image = createReadStream(filePath);
    res.type(lookup(filePath) as string);
    return new StreamableFile(image);
  }

  /**
   * 上传文件
   * @param param0
   */
  async upload(file, dir) {
    const time = new Date().getTime();
    const filename = time + '_' + file.originalname;
    const data = file.buffer.toString('base64');

    const uploader: UploadFileType = {
      filename: filename,
      mimetype: file.mimetype,
      value: data,
    };

    const path = await uploadLocalFile(uploader, dir);

    return await this.uploadFileService.create(path);
  }
}
