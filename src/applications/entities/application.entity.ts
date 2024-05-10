import { IsEmpty, IsNotEmpty } from 'class-validator';
import { Order } from 'src/orders/entities/order.entity';
import { TableApplication } from 'src/table-applications/entities/table-application.entity';
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

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

//   @OneToOne(() => Order, (order) => order.id)
//   order: Order;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @IsNotEmpty()
  @ManyToOne(() => User, (user) => user.applications)
  user: User;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    () => TableApplication,
    (tableApplication) => tableApplication.application,
  )
  tableApplication: TableApplication;
}
