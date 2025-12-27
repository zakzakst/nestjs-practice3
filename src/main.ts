import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: envファイルで設定したいが上手くできなかった。調べる
  // console.log(process.env.PORT);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
