import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { Device } from '../../user/devices/entities/device.entity'

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

  @OneToMany(() => Device, (device) => device.user)
  device: number

  constructor(id: number, login: string, password: string, code: string, token: string) { }
}
