import { TableOrder } from 'src/table-order/entities/table-order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('filials')
export class Filial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameFilial: string;

  @OneToMany(() => TableOrder, (tableOrder) => tableOrder.filial)
  tableOrder: TableOrder[];
}
