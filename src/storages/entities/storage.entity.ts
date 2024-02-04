import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Storage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameStorage: string;

  @OneToMany(() => User, (user) => user.storage)
  users: User[];

  @OneToMany(() => Order, (order) => order.storage)
  orders: Order[];
}
