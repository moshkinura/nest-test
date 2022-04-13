import { ApiProperty } from '@nestjs/swagger'

import { DevicesDto } from './devices.dto'

export class PayloadDto {
  @ApiProperty({
    description: 'Идентификатор пользователя.',
  })
  user_id: string

  @ApiProperty({
    description: 'Массив с устройствами пользователя.',
  })
  devices: DevicesDto[]
}