import { IsEmpty, IsOptional } from 'class-validator';
import { Activity } from 'src/activities/entities/activity.entity';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
import { Dimension } from 'src/dimensions/entities/dimension.entity';
import { Filial } from 'src/filials/entities/filial.entity';
import { Order } from 'src/orders/entities/order.entity';
import { TableApplication } from 'src/table-applications/entities/table-application.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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

  @Column({ nullable: true })
  nameMTR: string;

  // @ManyToOne(() => Activity, (activity) => activity.tableOrder)
  // activity: Activity;

  @Column({ nullable: true })
  activity: string;

  @Column({ nullable: true })
  inventoryNumber: string;

  // @ManyToOne(() => Dimension, (dimension) => dimension.tableOrder)
  // dimension: Dimension;

  @Column({ nullable: true })
  dimension: string;

  @Column({ nullable: true })
  amountMTR: number;

  // @ManyToOne(() => Filial, (filial) => filial.tableOrder)
  // filial: Filial;

  @Column({ nullable: true })
  filial: string;

  // @ManyToOne(() => Delivery, (delivery) => delivery.tableOrder)
  // delivery: Delivery;

  @Column({ nullable: true })
  delivery: string;

  @Column({ nullable: true })
  @IsOptional()
  note: string;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Order, (order) => order.tableOrder)
  order: Order;

  @OneToMany(
    () => TableApplication,
    (tableApplication) => tableApplication.tableOrder,
  )
  tableApplication: TableApplication;
}
