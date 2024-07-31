import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT || 3000);
  console.log(`server start on host: http://localhost:${process.env.SERVER_PORT || 3000}`)
}
bootstrap();
