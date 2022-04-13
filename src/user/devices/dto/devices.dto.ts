import { ApiProperty } from '@nestjs/swagger'

import { CapabilitiesDto } from './capabilities.dto'
import { PropertiesDto } from './properties.dto'
import { DeviceInfoDto } from './device-info.dto'

export enum TypeDevice {
  "devices.types.light" = "devices.types.light",
  "devices.types.socket" = "devices.types.socket",
  "devices.types.switch" = "devices.types.switch",
  "devices.types.thermostat" = "devices.types.thermostat",
  "devices.types.thermostat.ac" = "devices.types.thermostat.ac",
  "devices.types.media_device" = "devices.types.media_device",
  "devices.types.media_device.tv" = "devices.types.media_device.tv",
  "devices.types.media_device.tv_box" = "devices.types.media_device.tv_box",
  "devices.types.media_device.receiver" = "devices.types.media_device.receiver",
  "devices.types.cooking" = "devices.types.cooking",
  "devices.types.cooking.coffee_maker" = "devices.types.cooking.coffee_maker",
  "devices.types.cooking.kettle" = "devices.types.cooking.kettle",
  "devices.types.cooking.multicooker" = "devices.types.cooking.multicooker",
  "devices.types.openable" = "devices.types.openable",
  "devices.types.openable.curtain" = "devices.types.openable.curtain",
  "devices.types.humidifier" = "devices.types.humidifier",
  "devices.types.purifier" = "devices.types.purifier",
  "devices.types.vacuum_cleaner" = "devices.types.vacuum_cleaner",
  "devices.types.washing_machine" = "devices.types.washing_machine",
  "devices.types.dishwasher" = "devices.types.dishwasher",
  "devices.types.iron" = "devices.types.iron",
  "devices.types.censor" = "devices.types.censor",
  "devices.types.other" = "devices.types.other",
}

export class DevicesDto {
  @ApiProperty({
    description: 'Идентификатор устройства. Должен быть уникален среди всех устройств производителя.',
  })
  id: string

  @ApiProperty({
    description: 'Название устройства.',
  })
  name: string

  @ApiProperty({
    description: 'Описание устройства.',
  })
  description?: string

  @ApiProperty({
    description: 'Название помещения, в котором расположено устройство.',
  })
  room?: string

  @ApiProperty({
    description: 'Тип устройства.',
  })
  type: TypeDevice

  @ApiProperty({
    description: 'Объект, который состоит из набора пар "ключ":"значение" любой вложенности и представляет собой дополнительную информацию об устройстве.',
  })
  custom_data?: object

  @ApiProperty({
    description: 'Массив с информацией об умениях устройства.',
  })
  capabilities?: CapabilitiesDto[]

  @ApiProperty({
    description: 'Массив с информацией о встроенных датчиках устройства.	',
  })
  properties?: PropertiesDto[]

  @ApiProperty({
    description: 'Дополнительная техническая информация об устройстве.',
  })
  device_info?: DeviceInfoDto
}