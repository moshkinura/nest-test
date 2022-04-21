import { ApiProperty } from '@nestjs/swagger'

export enum TypeProperties {
  "devices.properties.float" = "devices.properties.float",
  "devices.properties.event" = "devices.properties.event",
}

export enum PropInstance {
  "amperage" = "amperage",
  "battery_level" = "battery_level",
  "co2_level" = "co2_level",
  "humidity" = "humidity",
  "illumination" = "illumination",
  "pm1_density" = "pm1_density",
  "pm2.5_density" = "pm2.5_density",
  "pm10_density" = "pm10_density",
  "power" = "power",
  "pressure" = "pressure",
  "temperature" = "temperature",
  "tvoc" = "tvoc",
  "voltage" = "voltage",
  "water_level" = "water_level",
  "vibration" = "vibration",
  "open" = "open",
  "button" = "button",
  "motion" = "motion",
  "smoke" = "smoke",
  "gas" = "gas",
  "water_leak" = "water_leak",
}

export enum PropUnit {
  "unit.ampere" = "unit.ampere",
  "unit.percent" = "unit.percent",
  "unit.ppm" = "unit.ppm",
  "unit.illumination.lux" = "unit.illumination.lux",
  "unit.density.mcg_m3" = "unit.density.mcg_m3",
  "unit.watt" = "unit.watt",
  "unit.pressure.atm" = "unit.pressure.atm",
  "unit.pressure.pascal" = "unit.pressure.pascal",
  "unit.pressure.bar" = "unit.pressure.bar",
  "unit.pressure.mmhg" = "unit.pressure.mmhg",
  "unit.temperature.celsius" = "unit.temperature.celsius",
  "unit.temperature.kelvin" = "unit.temperature.kelvin",
  "unit.volt" = "unit.volt",
}

export class PropertiesDto {
  @ApiProperty({
    description: 'Тип встроенного датчика.',
  })
  type: TypeProperties

  @ApiProperty({
    description: 'Доступен ли для встроенного датчика устройства запрос состояния.',
  })
  retrievable?: boolean

  @ApiProperty({
    description: 'Оповещает ли встроенный датчик об изменении состояния платформу умного дома, используя сервис уведомлений.',
  })
  reportable?: boolean

  @ApiProperty({
    description: 'Параметры датчика',
  })
  parameters?: {
    instance: PropInstance
    unit: PropUnit
    //TODO: В разработке
    //events: Events[]
  }

  @ApiProperty({
    description: 'Параметры датчика в статусе',
  })
  state?: {
    instance: PropInstance
    value: number
  }
}