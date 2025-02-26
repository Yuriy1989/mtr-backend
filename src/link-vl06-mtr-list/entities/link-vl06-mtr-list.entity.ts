import { Vl06 } from 'src/vl06/entities/vl06.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('linkVl06MrtList')
export class LinkVl06MtrList {
  @PrimaryGeneratedColumn()
  id: number;
}
