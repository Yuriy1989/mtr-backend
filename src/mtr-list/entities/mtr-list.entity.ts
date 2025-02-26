import { Vl06 } from 'src/vl06/entities/vl06.entity';
import { Zapiski } from 'src/zapiski/entities/zapiski.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('mtrList') // Исправлено название таблицы
export class MtrList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ nullable: true }) // Добавлено, если может быть null
  region: string;

  @Column({ nullable: true }) // Добавлено, если может быть null
  express: string;

  @Column({ nullable: true }) // Добавлено, если может быть null
  note: string;

  // @ManyToOne(() => Vl06, (vl06) => vl06.mtrList, { onDelete: 'CASCADE' }) // Добавлено удаление каскадом
  // vl06: Vl06;

  // @ManyToOne(() => Zapiski, (zapiski) => zapiski.mtrList, {
  //   onDelete: 'CASCADE',
  // }) // Добавлено удаление каскадом
  // zapiski: Zapiski;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
