import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from 'src/database/Entities/group.entity';
import { CreateGroupDto, PatchGroupDto } from './dtos/groupDto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async findAll(queryExtend?: boolean): Promise<Group[]> {
    if (queryExtend)
      return await this.groupRepository.find({ relations: { tasks: true } });
    else return await this.groupRepository.find();
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

  async createGroup(body: CreateGroupDto) {
    return await this.groupRepository.save(body);
  }

  async patchGroup(groupId: number, body: PatchGroupDto) {
    const group = await this.findById(groupId);

    return await this.groupRepository.save({ id: group.id, ...body });
  }

  async deleteGroup(groupId: number) {
    const group = await this.findById(groupId);

    return await this.groupRepository.delete(group.id);
  }
}
