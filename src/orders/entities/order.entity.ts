import { IsEmpty, IsNotEmpty } from 'class-validator';
import { Application } from 'src/applications/entities/application.entity';
import { Region } from 'src/regions/entities/region.entity';
import { Storage } from 'src/storages/entities/storage.entity';
import { TableOrder } from 'src/table-order/entities/table-order.entity';
import { User } from 'src/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @OneToMany(() => TableOrder, (tableOrder) => tableOrder.order)
  tableOrder: TableOrder;

//   @OneToOne(() => Application)
//   @JoinColumn()
  // application: Application;
  @OneToOne(() => Application, (application) => application.order)
  application: Application;
}
