import { ApiProperty } from '@nestjs/swagger'

import { CapabilitiesDto } from './capabilities.dto'
import { PropertiesDto } from './properties.dto'
import { DeviceInfoDto } from './device-info.dto'

export enum TypeDevice {
  "light" = "devices.types.light",
  "socket" = "devices.types.socket",
  "switch" = "devices.types.switch",
  "thermostat" = "devices.types.thermostat",
  "thermostat.ac" = "devices.types.thermostat.ac",
  "media_device" = "devices.types.media_device",
  "media_device.tv" = "devices.types.media_device.tv",
  "media_device.tv_box" = "devices.types.media_device.tv_box",
  "media_device.receiver" = "devices.types.media_device.receiver",
  "cooking" = "devices.types.cooking",
  "cooking.coffee_maker" = "devices.types.cooking.coffee_maker",
  "cooking.kettle" = "devices.types.cooking.kettle",
  "cooking.multicooker" = "devices.types.cooking.multicooker",
  "openable" = "devices.types.openable",
  "openable.curtain" = "devices.types.openable.curtain",
  "humidifier" = "devices.types.humidifier",
  "purifier" = "devices.types.purifier",
  "vacuum_cleaner" = "devices.types.vacuum_cleaner",
  "washing_machine" = "devices.types.washing_machine",
  "dishwasher" = "devices.types.dishwasher",
  "iron" = "devices.types.iron",
  "censor" = "devices.types.censor",
  "other" = "devices.types.other",
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
    type: () => DeviceInfoDto
  })
  device_info?: DeviceInfoDto
}