import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '@/src/database/Entities/task.entity';
import { TaskController } from '@/src/tasks/tasks.controller';
import { TaskService } from '@/src/tasks/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService],
  controllers: [TaskController],
  exports: [],
})
export class TaskModule {}
