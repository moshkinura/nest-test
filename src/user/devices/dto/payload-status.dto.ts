import { ApiProperty } from '@nestjs/swagger'

import { DevicesDto } from './devices.dto'

export class PayloadStatusDto {
  @ApiProperty({
    description: 'Массив с устройствами пользователя.',
  })
  devices: DevicesDto[]
}