import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Device } from './entities/device.entity'
import { AllDevicesDto } from './dto/all-devices.dto'
import { TypeDevice } from './dto/devices.dto'

import { JwtService } from '@nestjs/jwt'

export interface PAYLOAD {
  login: string
  sub: number
  iat: number
  exp: number
}

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device) private readonly deviceRepository: Repository<Device>,
    private jwtService: JwtService
  ) { }

  async getDevices(id: string, authorization: string): Promise<AllDevicesDto> {
    const token = this.jwtService.verify(authorization, { complete: true })
    const payload: PAYLOAD = token.payload

    console.log(payload)
    await this.deviceRepository.findOne(
      {
        where: { id: payload.sub }
      }
    )
    return {
      request_id: id,
      payload: {
        user_id: '123',
        devices: [
          {
            id: '111',
            name: 'имя',
            type: TypeDevice.other,
          }
        ]
      }
    }
  }

  async postDevicesQuery(id: string, authorization: string): Promise<AllDevicesDto> {
    const token = authorization
    return {
      request_id: id,
      payload: {
        user_id: token,
        devices: [
          {
            id: '111',
            name: 'имя',
            type: TypeDevice.other,
          }
        ]
      }
    }
  }

  async postDevicesAction(id: string, authorization: string): Promise<AllDevicesDto> {
    const token = authorization
    return {
      request_id: id,
      payload: {
        user_id: token,
        devices: [
          {
            id: '111',
            name: 'имя',
            type: TypeDevice.other,
          }
        ]
      }
    }
  }
}
