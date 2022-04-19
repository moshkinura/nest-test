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
export class Properties {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Device, (device) => device.properties)
  device: Device

  @Column()
  type: string

  @Column()
  retrievable: boolean

  @Column()
  reportable: boolean

  @Column()
  instance: string

  @Column()
  unit: string
}