import { Vl06 } from 'src/vl06/entities/vl06.entity';
import { Zapiski } from 'src/zapiski/entities/zapiski.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('linkVl06Zapiski')
export class LinkVl06Zapiski {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vl06, (vl06) => vl06.links, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'vl06Id' })
  vl06: Vl06;

  @ManyToOne(() => Zapiski, (zapiski) => zapiski.links, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'zapiskiId' })
  zapiski: Zapiski;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
