import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  login: string

  @Column({ length: 500 })
  firstname: string

  @Column({ length: 500 })
  lastname: string

  @Column('int')
  age: number

  constructor(id: number, login: string, firstname: string, lastname: string, age: number) {
    this.firstname = firstname || 'Unnamed'
    this.lastname = lastname || 'Unnamed'
    this.age = age || NaN
  }
}