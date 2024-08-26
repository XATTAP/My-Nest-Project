import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from 'src/database/Entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async findById(id: number): Promise<Group> {
    const group = await this.groupRepository.findOne({
      relations: { tasks: true },
      where: { id },
    });
    if (!group) {
      throw new NotFoundException({ message: 'Группа не найдена' });
    }
    return group;
  }
}
