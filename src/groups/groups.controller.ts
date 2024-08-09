import { Controller, Get } from '@nestjs/common';
import { GroupService } from './groups.service';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupsService: GroupService) {}

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }
}
