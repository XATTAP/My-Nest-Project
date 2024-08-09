import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);

  await app.listen(process.env.SERVER_PORT || 3000);
  console.log(
    `server start on host: http://localhost:${process.env.SERVER_PORT || 3000}`,
  );
}
bootstrap();
