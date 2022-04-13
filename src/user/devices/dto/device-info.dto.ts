import { ApiProperty } from '@nestjs/swagger'

export class DeviceInfoDto {
  @ApiProperty({
    description: 'Название производителя устройства. Может содержать до 256 символов.',
  })
  manufacturer?: string

  @ApiProperty({
    description: 'Название модели устройства. Может содержать до 256 символов.',
  })
  model?: string

  @ApiProperty({
    description: 'Версия аппаратной составляющей устройства. Может содержать до 256 символов.',
  })
  hw_version?: string

  @ApiProperty({
    description: 'Версия программного обеспечения устройства. Может содержать до 256 символов.',
  })
  sw_version?: string
}