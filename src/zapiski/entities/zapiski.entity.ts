import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tableZapiski')
export class Zapiski {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codeMRT: string;
}
