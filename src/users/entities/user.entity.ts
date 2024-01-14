import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from '../../departments/entities/department.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  surname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  position: string;

  @ManyToOne(() => Department, (Department) => Department.nameDepartment)
  department: Department;
}
