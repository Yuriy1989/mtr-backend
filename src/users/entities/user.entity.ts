import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Department } from '../../departments/entities/department.entity';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { Storage } from 'src/storages/entities/storage.entity';
import { Region } from 'src/regions/entities/region.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  firstName: string;

  @IsNotEmpty()
  @Column()
  lastName: string;

  @IsNotEmpty()
  @Column()
  surname: string;

  @IsNotEmpty()
  @Column()
  username: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @IsNotEmpty()
  @Column()
  email: string;

  @IsNotEmpty()
  @Column()
  position: string;

  @IsNotEmpty()
  @ManyToOne(() => Department, (depart) => depart.users)
  department: Department;

  @IsNotEmpty()
  @ManyToOne(() => Storage, (storag) => storag.users)
  storage: Storage;

  @IsNotEmpty()
  @ManyToOne(() => Region, (region) => region.users)
  region: Region;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;
}
