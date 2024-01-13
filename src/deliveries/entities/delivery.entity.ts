import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deliveries')
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameDelivery: string;
}
