import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from '@/src/tasks/tasks.service';
import { CreateTaskDto, DoTaskDto, PatchTaskDto } from '@/src/tasks/dtos/taskDto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findById(id);
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.createTask(body);
  }

  @Patch(':id')
  patchTask(@Body() body: PatchTaskDto, @Param('id', ParseIntPipe) id: number) {
    return this.tasksService.patchTask(id, body);
  }

  @Patch(':id/done')
  doTask(@Body() body: DoTaskDto, @Param('id', ParseIntPipe) id: number) {
    return this.tasksService.doTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id);
  }
}
