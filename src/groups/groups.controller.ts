import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './groups.service';
import { CreateGroupDto, PatchGroupDto } from './dtos/groupDto';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupsService: GroupService) { }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.findById(id);
  }

  @Post()
  createGroup(@Body() body: CreateGroupDto) {
    return this.groupsService.createGroup(body);
  }

  @Put(':id')
  patchGroup(@Body() body: PatchGroupDto, @Param('id', ParseIntPipe) id: number) {
    return this.groupsService.patchGroup(id, body);
  }

  @Delete(':id')
  deleteGroup(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.deleteGroup(id);
  }
}
