import { ApiProperty } from '@nestjs/swagger'

enum TypeProperties {
  "devices.properties.float",
  "devices.properties.event",
}

enum Instance {
  "amperage",
  "battery_level",
  "co2_level",
  "humidity",
  "illumination",
  "pm1_density",
  "pm2.5_density",
  "pm10_density",
  "power",
  "pressure",
  "temperature",
  "tvoc",
  "voltage",
  "water_level",
  "vibration",
  "open",
  "button",
  "motion",
  "smoke",
  "gas",
  "water_leak",
}

enum Unit {
  "unit.ampere",
  "unit.percent",
  "unit.ppm",
  "unit.illumination.lux",
  "unit.density.mcg_m3",
  "unit.watt",
  "unit.pressure.atm",
  "unit.pressure.pascal",
  "unit.pressure.bar",
  "unit.pressure.mmhg",
  "unit.temperature.celsius",
  "unit.temperature.kelvin",
  "unit.volt",
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
  parameters: {
    instance: Instance
    unit: Unit
    //TODO: В разработке
    //events: Events[]
  }
}