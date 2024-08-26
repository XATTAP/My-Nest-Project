import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Task } from '@/src/database/Entities/task.entity';

@Entity({
  name: 'Groups',
})
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 64,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  description: string;

  @OneToMany(() => Task, (task) => task.group, {
    cascade: true,
  })
  tasks: Task[];

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updatedAt: Date;
}
