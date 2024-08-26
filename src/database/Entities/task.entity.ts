import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Group } from './group.entity';

@Entity({
  name: 'Tasks',
})
export class Task {
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

  @Column({ default: false, type: 'boolean' })
  done: boolean;

  @ManyToOne(() => Group, (group) => group.tasks, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updatedAt: Date;
}
