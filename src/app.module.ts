import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GroupModule } from './groups/groups.module';
import { TypeOrmModule } from './database/database.module';
import { TaskModule } from './tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule, GroupModule, TaskModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
