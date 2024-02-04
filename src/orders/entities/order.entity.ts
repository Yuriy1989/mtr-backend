import { IsEmpty, IsNotEmpty } from 'class-validator';
import { Region } from 'src/regions/entities/region.entity';
import { Storage } from 'src/storages/entities/storage.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numberOrder: string;

  @IsNotEmpty()
  @ManyToOne(() => Region, (region) => region.orders)
  region: Region;

  @IsNotEmpty()
  @ManyToOne(() => Storage, (storage) => storage.orders)
  storage: Storage;

  @OneToOne(() => User)
  user: User;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;
}
