import { TableOrder } from 'src/table-order/entities/table-order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dimansion')
export class Dimension {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameDimension: string;

  @OneToMany(() => TableOrder, (tableOrder) => tableOrder.dimension)
  tableOrder: TableOrder[];
}
