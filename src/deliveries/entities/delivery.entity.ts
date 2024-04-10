import { TableOrder } from 'src/table-order/entities/table-order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deliveries')
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameDelivery: string;

  @OneToMany(() => TableOrder, (tableOrder) => tableOrder.delivery)
  tableOrder: TableOrder[];
}
