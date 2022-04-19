import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from 'typeorm'

import { Device } from './device.entity'

@Entity()
export class Capabilities {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Device, (device) => device.capabilities)
  device: Device

  @Column()
  type: string

  @Column()
  retrievable: boolean

  @Column()
  reportable: boolean

  @Column()
  instance: string
}