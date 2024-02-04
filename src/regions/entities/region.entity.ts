import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameRegion: string;

  @OneToMany(() => User, (user) => user.region)
  users: User[];

  @OneToMany(() => Order, (order) => order.region)
  orders: Order[];
}
