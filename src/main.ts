import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // 使用fastify驱动
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      // 启用跨域访问
      cors: true,
      // 只使用error和warn这两种输出，避免在控制台冗余输出
      logger: ['error', 'warn'],
    },
  );
  // 设置全局访问前缀
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('File Uploading')
    .setDescription('A simple API that handles file uploading')
    .setVersion('1.0')
    .addTag('Files')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, document);

  // 启动后的输出
  await app.listen(3100, () => {
    console.log('api: http://localhost:3100');
  });
}
bootstrap();
