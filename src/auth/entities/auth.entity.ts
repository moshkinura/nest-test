import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 20 })
  login: string

  @Column({ length: 500 })
  password: string

  @Column({ length: 500 })
  code: string

  @Column({ length: 500 })
  token: string


  constructor(id: number, login: string, password: string, code: string, token: string) { }
}
