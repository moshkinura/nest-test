import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm'

import { Status } from './status.entity'

@Entity()
export class StatusProperties {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Status, (status) => status.properties)
  status: Status

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