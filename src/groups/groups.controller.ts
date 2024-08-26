import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GroupService } from './groups.service';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupsService: GroupService) {}

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.findById(id);
  }
}
