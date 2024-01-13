import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dimansion')
export class Dimension {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameDimension: string;
}
