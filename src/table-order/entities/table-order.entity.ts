import { IsEmpty } from 'class-validator';
import { Activity } from 'src/activities/entities/activity.entity';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
import { Dimension } from 'src/dimensions/entities/dimension.entity';
import { Filial } from 'src/filials/entities/filial.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tableOrder')
export class TableOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codeMTR: string;

  @Column()
  numberPartMTR: string;

  @Column()
  nameMTR: string;

  @ManyToOne(() => Activity, (activity) => activity.tableOrder)
  activity: Activity;

  @Column()
  inventoryNumber: string;

  @ManyToOne(() => Dimension, (dimension) => dimension.tableOrder)
  dimension: Dimension;

  @Column()
  amountMTR: number;

  @ManyToOne(() => Filial, (filial) => filial.tableOrder)
  filial: Filial;

  @ManyToOne(() => Delivery, (delivery) => delivery.tableOrder)
  delivery: Delivery;

  @Column()
  note: string;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Order, (order) => order.tableOrder)
  order: Order;
}
