import { LinkVl06Zapiski } from 'src/link-vl06-zapiski/entities/link-vl06-zapiski.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('tableZapiski')
export class Zapiski {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LinkVl06Zapiski, (link) => link.zapiski)
  links: LinkVl06Zapiski[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
