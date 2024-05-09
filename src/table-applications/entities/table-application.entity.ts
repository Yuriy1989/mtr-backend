import { IsEmpty, IsOptional } from 'class-validator';
import { Application } from 'src/applications/entities/application.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tableApplication')
export class TableApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codeMTR: string;

  @Column()
  numberPartMTR: string;

  @Column({ nullable: true })
  nameMTR: string;

  @Column({ nullable: true })
  activity: string;

  @Column({ nullable: true })
  inventoryNumber: string;

  @Column({ nullable: true })
  dimension: string;

  @Column({ nullable: true })
  amountMTR: number;

  @Column({ nullable: true })
  filial: string;

  @Column({ nullable: true })
  delivery: string;

  @Column({ nullable: true })
  @IsOptional()
  note: string;

  @Column({ nullable: true })
  massa: string;

  @Column({ nullable: true })
  dateRequest: string;

  @Column({ nullable: true })
  transport: string;

  @Column({ nullable: true })
  dateShipment: string;

  @Column({ nullable: true })
  format: string;

  @Column({ nullable: true })
  Discarded: string;

  @Column({ nullable: true })
  Remainder: string;

  @Column({ nullable: true })
  transit: string;

  @Column({ nullable: true })
  m11: string;

  @Column({ nullable: true })
  addNote: string;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Application, (application) => application.tableApplication)
  application: Application;
}
