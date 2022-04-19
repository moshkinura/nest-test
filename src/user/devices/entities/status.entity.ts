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

import { StatusCapabilities } from './status_capabilities.entity'
import { StatusProperties } from './status_properties.entity'
import { Device } from './device.entity'

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Device)
  @JoinColumn()
  device: Device

  @OneToMany(() => StatusCapabilities, (capabilities) => capabilities.status)
  capabilities: StatusCapabilities[]

  @OneToMany(() => StatusProperties, (properties) => properties.status)
  properties: StatusProperties[]

  // constructor(id: number, login: object) { }
}