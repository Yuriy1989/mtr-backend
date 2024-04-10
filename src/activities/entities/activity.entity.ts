import { TableOrder } from 'src/table-order/entities/table-order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameActivity: string;

  @OneToMany(() => TableOrder, (tableOrder) => tableOrder.activity)
  tableOrder: TableOrder[];
}
