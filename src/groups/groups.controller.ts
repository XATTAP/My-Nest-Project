import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GroupService } from './groups.service';
import { CreateGroupDto, PatchGroupDto } from './dtos/groupDto';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupsService: GroupService) {}

  @Get()
  findAll(@Query('extends', ParseBoolPipe) queryExtend: boolean) {
    return this.groupsService.findAll(queryExtend);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.findById(id);
  }

  @Post()
  createGroup(@Body() body: CreateGroupDto) {
    return this.groupsService.createGroup(body);
  }

  @Patch(':id')
  patchGroup(
    @Body() body: PatchGroupDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.groupsService.patchGroup(id, body);
  }

  @Delete(':id')
  deleteGroup(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.deleteGroup(id);
  }
}
