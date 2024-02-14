import { IsEmpty, IsNotEmpty } from 'class-validator';
import { Region } from 'src/regions/entities/region.entity';
import { Storage } from 'src/storages/entities/storage.entity';
import { User } from 'src/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @ManyToOne(() => Region, (region) => region.orders)
  region: Region;

  @IsNotEmpty()
  @ManyToOne(() => Storage, (storage) => storage.orders)
  storage: Storage;

  @IsNotEmpty()
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;
}
