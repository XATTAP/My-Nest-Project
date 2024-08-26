import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '@/src/database/Entities/task.entity';
import { CreateTaskDto, DoTaskDto, PatchTaskDto } from '@/src/tasks/dtos/taskDto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async findAll() {
    return await this.taskRepository.find({ relations: { group: true } });
  }

  async findById(id: number) {
    const task = await this.taskRepository.findOne({
      where: { id },
    });
    if (!task) {
      throw new NotFoundException({ message: 'Задача не найдена' });
    }
    return task;
  }

  async createTask(body: CreateTaskDto) {
    return await this.taskRepository.save(body);
  }

  async patchTask(taskId: number, body: PatchTaskDto) {
    const task = await this.findById(taskId);

    return await this.taskRepository.save({ id: task.id, ...body });
  }

  async doTask(taskId: number, body: DoTaskDto) {
    const task = await this.findById(taskId);

    return await this.taskRepository.save({ id: task.id, ...body });
  }

  async deleteTask(taskId: number) {
    const task = await this.findById(taskId);

    return await this.taskRepository.delete(task.id);
  }
}
