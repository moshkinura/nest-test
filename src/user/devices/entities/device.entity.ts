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

import { Auth } from '../../../auth/entities/auth.entity'
import { Capabilities } from './capabilities.entity'
import { Properties } from './properties.entity'
import { DeviceInfo } from './device_info.entity'

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Auth)
  user: number

  @Column()
  uuid: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  room: string

  @Column()
  type: string

  @OneToMany(() => Capabilities, (capabilities) => capabilities.device)
  capabilities: Capabilities[]

  @OneToMany(() => Properties, (properties) => properties.device)
  properties: Properties[]

  @OneToOne(() => DeviceInfo)
  @JoinColumn()
  device_info: DeviceInfo

  // constructor(id: number, login: object) { }
}