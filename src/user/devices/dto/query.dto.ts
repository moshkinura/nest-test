import { ApiProperty } from '@nestjs/swagger'

export interface DEVICE_QUERY {
  id: string
  custom_data?: object
}

export class QueryDto {
  @ApiProperty({
    description: 'Массив с устройствами пользователя',
  })
  devices: DEVICE_QUERY[]
}