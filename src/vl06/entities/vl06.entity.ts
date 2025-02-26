import { LinkVl06Zapiski } from 'src/link-vl06-zapiski/entities/link-vl06-zapiski.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tableVL06')
export class Vl06 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  supply: string; // "Поставка"

  @Column({ nullable: true })
  factory: string; // "Завод"

  @Column({ nullable: true })
  storage: string; // "Склад"

  @Column({ nullable: true })
  vacationOfTheMaterial: string; // "Д/Отпуска материала"

  @Column({ nullable: true })
  material: string; // "Материал"

  @Column({ nullable: true })
  party: string; // "Партия"

  @Column({ nullable: true })
  nameMTR: string; // "Название"

  @Column({ nullable: true })
  basic: string; // "Базовая ЕИ"

  @Column({ nullable: true })
  supplyVolume: string; // "Объем поставки"

  @Column({ nullable: true })
  address: string; // "Имя получателя материала"

  @Column({ nullable: true })
  created: string; // "Создал"

  @OneToMany(() => LinkVl06Zapiski, (link) => link.vl06)
  links: LinkVl06Zapiski[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
