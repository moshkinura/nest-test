import { ApiProperty } from '@nestjs/swagger'

import { PayloadStatusDto } from './payload-status.dto'

export class AllStatusDto {
  @ApiProperty({
    description: 'Headers - "x-request-id" Идентификатор запроса.',
    required: true,
  })
  request_id: string

  @ApiProperty(
    {
      description: 'Массив',
      type: () => PayloadStatusDto
    }
  )
  payload?: PayloadStatusDto

}