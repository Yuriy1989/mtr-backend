import { IsEmpty, IsOptional } from 'class-validator';
import { Application } from 'src/applications/entities/application.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tableApplication')
export class TableApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codeMTR: string; //Код МТР

  @Column()
  numberPartMTR: string; //Номер партии

  @Column({ nullable: true }) //Наименование МТР
  nameMTR: string;

  @Column({ nullable: true }) //Объект
  activity: string;

  @Column({ nullable: true }) //Инвентарный номер объекта
  inventoryNumber: string;

  @Column({ nullable: true }) //Ед.изм.
  dimension: string;

  @Column({ nullable: true }) //Кол-во
  amountMTR: number;

  @Column({ nullable: true }) //Филиал
  filial: string;

  @Column({ nullable: true }) //Режим доставки МТР
  delivery: string;

  @Column({ nullable: true }) //Примечание
  @IsOptional()
  note: string;

  @Column({ nullable: true }) //Вес одной единицы
  massa: string;

  @Column({ nullable: true }) //Дата заявки на отгрузку
  dateRequest: string;

  @Column({ nullable: true }) //Заявка на контейнер/автотранспорт
  transport: string;

  @Column({ nullable: true }) //Дата отгрузки
  dateShipment: string;

  @Column({ nullable: true }) //Груз сформирован в контейнер/автотранспорт
  format: string;

  @Column({ nullable: true }) //Отгружено
  discarded: string;

  @Column({ nullable: true }) //Остаток
  remainder: string;

  @Column({ nullable: true }) //Наименование транзитного или конечного получателя груза
  transit: string;

  @Column({ nullable: true }) //№ накладной
  numberM11: string;

  @Column({ nullable: true }) //Дата накладной
  dateM11: string;

  @Column({ nullable: true }) //Примечание по доставке
  addNote: string;

  @IsEmpty()
  @CreateDateColumn()
  createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Application, (application) => application.tableApplication)
  application: Application;
}
