import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  exports: [...databaseProviders],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ],
})
export class AppModule {}
