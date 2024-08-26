import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GroupModule } from '@/src/groups/groups.module';
import { TypeOrmModule } from '@/src/database/database.module';
import { TaskModule } from '@/src/tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule, GroupModule, TaskModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
