import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class DeviceInfo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  hw_version: string

  @Column()
  sw_version: string
}