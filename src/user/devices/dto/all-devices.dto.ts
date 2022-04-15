import { ApiProperty } from '@nestjs/swagger'

import { PayloadDto } from './payload.dto'

export class AllDevicesDto {
  @ApiProperty({
    description: 'Headers - "x-request-id" Идентификатор запроса.',
    required: true,
  })
  request_id: string

  @ApiProperty(
    {
      description: 'Массив',
      type: () => PayloadDto
    }
  )
  payload?: PayloadDto

}