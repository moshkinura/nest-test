import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  login: string;

  @Column({ length: 500 })
  firstname: string;

  @Column({ length: 500 })
  lastname: string;
  
  @Column('int')
  age: number;
}