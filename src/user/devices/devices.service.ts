import { Injectable } from '@nestjs/common'

import { AllDevicesDto } from './dto/all-devices.dto'
import { TypeDevice } from './dto/devices.dto'

@Injectable()
export class DevicesService {
  getDevices(headers: object): AllDevicesDto {
    const authorization = headers['authorization']
    const id = headers['x-request-id']
    let auth = authorization.split(' ')
    const token = auth[1]
    return {
      request_id: id,
      payload: {
        user_id: token,
        devices: [
          {
            id: '111',
            name: 'имя',
            type: TypeDevice['devices.types.other'],
          }
        ]
      }
    }
  }
}
