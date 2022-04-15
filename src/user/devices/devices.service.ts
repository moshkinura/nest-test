import { Injectable } from '@nestjs/common'

import { AllDevicesDto } from './dto/all-devices.dto'
import { TypeDevice } from './dto/devices.dto'

@Injectable()
export class DevicesService {
  getDevices(id: string, authorization: string): AllDevicesDto {
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

  postDevicesQuery(id: string, authorization: string): AllDevicesDto {
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

  postDevicesAction(id: string, authorization: string): AllDevicesDto {
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
