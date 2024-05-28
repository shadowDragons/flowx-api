import { join } from 'path';

import * as path from 'path';

import { ensureDirSync, writeFileSync } from 'fs-extra';
import { isNil } from 'lodash';

import { UploadFileType } from './types';

/**
 * 上传文件
 * @param file 文件上传配置
 * @param dir 上传相对目录
 */
export function uploadLocalFile(file: UploadFileType, dir?: string) {
  // 获取文件总存储路径
  const uploadConfig = join(
    process.env.PUBLIC_DIR,
    process.env.MEDIA_UPLOAD_DIR,
  );
  // 上传文件的目录
  const uploadPath = isNil(dir) ? uploadConfig : join(uploadConfig, dir);
  // 使用base64解码上传文件的内容
  const buff = Buffer.from(file.value, 'base64');
  // 如果上传目录不存在则创建
  ensureDirSync(uploadPath, 0o2775);
  // 根据当前时间生成文件名
  const filename = generateRandomFileName(file.filename);
  // 最终文件存放的路径
  const filePath = join(uploadPath, filename);
  // 写入文件
  writeFileSync(filePath, buff);
  // 返回文件相对于总存储路径的相对位置
  return isNil(dir) ? filename : join(dir, filename);
}

function generateRandomFileName(originalFileName: string) {
  const timestamp = new Date().getTime(); // 获取当前时间戳
  const randomString = Math.random().toString(36).substring(2, 8); // 生成随机字符串
  console.log(originalFileName);
  const fileExtension = path.extname(originalFileName); // 获取原始文件名的扩展名

  return `${timestamp}_${randomString}${fileExtension}`; // 结合时间戳、随机字符串和文件扩展名作为文件名
}
