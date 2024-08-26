import { Module } from '@nestjs/common';
import { GroupController } from '@/src/groups/groups.controller';
import { GroupService } from '@/src/groups/groups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '@/src/database/Entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupService],
  controllers: [GroupController],
  exports: [],
})
export class GroupModule {}
