import { ApiProperty } from '@nestjs/swagger'

export enum TypeCapabilities {
  "devices.capabilities.on_off" = "devices.capabilities.on_off",
  "devices.capabilities.color_setting" = "devices.capabilities.color_setting",
  "devices.capabilities.video_stream" = "devices.capabilities.video_stream", //TODO: В разработке/бета тестирование
  "devices.capabilities.mode" = "devices.capabilities.mode",
  "devices.capabilities.range" = "devices.capabilities.range",
  "devices.capabilities.toggle" = "devices.capabilities.toggle",
}

export enum ColorModel {
  "hsv" = "hsv",
  "rgb" = "rgb",
}

export enum Protocol {
  "hls" = "hls",
  "progressive_mp4" = "progressive_mp4",
}

export enum CapInstance {
  "cleanup_mode" = "cleanup_mode",
  "coffee_mode" = "coffee_mode",
  "dishwashing" = "dishwashing",
  "fan_speed" = "fan_speed",
  "heat" = "heat",
  "input_source" = "input_source",
  "program" = "program",
  "swing" = "swing",
  "tea_mode" = "tea_mode",
  "thermostat" = "thermostat",
  "work_speed" = "work_speed",
  "on" = "on", //TODO: возможно не используется, DEPRECATED
  "brightness" = "brightness",
  "channel" = "channel",
  "humidity" = "humidity",
  "open" = "open",
  "temperature" = "temperature",
  "volume" = "volume"
}

export enum CapUnit {
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

export enum Modes {
  "auto" = "auto",
  "eco" = "eco",
  "turbo" = "turbo",
  "cool" = "cool",
  "dry" = "dry",
  "fan_only" = "fan_only",
  "heat" = "heat",
  "preheat" = "preheat",
  "high" = "high",
  "low" = "low",
  "medium" = "medium",
  "max" = "max",
  "min" = "min",
  "fast" = "fast",
  "slow" = "slow",
  "express" = "express",
  "normal" = "normal",
  "quiet" = "quiet",
  "horizontal" = "horizontal",
  "stationary" = "stationary",
  "vertical" = "vertical",
  "one" = "one",
  "two" = "two",
  "three" = "three", //TODO: one, two, ..., ten
  "americano" = "americano",
  "cappuccino" = "cappuccino",
  "double_espresso" = "double_espresso",
  "espresso" = "espresso",
  "latte" = "latte",
  "black_tea" = "black_tea",
  "flower_tea" = "flower_tea",
  "green_tea" = "green_tea",
  "herbal_tea" = "herbal_tea",
  "ooling_tea" = "ooling_tea",
  "puerh_tea" = "puerh_tea",
  "red_tea" = "red_tea",
  "white_tea" = "white_tea",
  "glass" = "glass",
  "intensive" = "intensive",
  "pre_rinse" = "pre_rinse",
  "aspic" = "aspic",
  "baby_food" = "baby_food",
  "baking" = "baking",
  "bread" = "bread",
  "boiling" = "boiling",
  "cereals" = "cereals",
  "cheesecake" = "cheesecake",
  "deep_fryer" = "deep_fryer",
  "dessert" = "dessert",
  "fowl" = "fowl",
  "frying" = "frying",
  "macaroni" = "macaroni",
  "milk_porridge" = "milk_porridge",
  "multicooker" = "multicooker",
  "pasta" = "pasta",
  "pilaf" = "pilaf",
  "pizza" = "pizza",
  "sauce" = "sauce",
  "slow_cook" = "slow_cook",
  "soup" = "soup",
  "steam" = "steam",
  "stewing" = "stewing",
  "vacuum" = "vacuum",
  "yogurt" = "yogurt",
}

export class CapabilitiesDto {
  @ApiProperty({
    description: 'Тип умения.',
  })
  type: TypeCapabilities

  @ApiProperty({
    description: 'Доступен ли для данного умения устройства запрос состояния.',
  })
  retrievable?: boolean

  @ApiProperty({
    description: 'Признак включенного оповещения об изменении состояния умения при помощи сервиса уведомлений.',
  })
  reportable?: boolean

  @ApiProperty({
    description: 'Параметры умения.',
  })
  parameters?: {
    split?: boolean

    color_model?: ColorModel
    temperature_k?: {
      min?: number
      max?: number
      precision?: number
    }

    color_scene?: {
      scenes?: string[]
    }

    instance?: CapInstance
    protocol?: Protocol

    modes?: {
      mode?: Modes[]
    }

    unit?: CapUnit
    range?: {
      min?: number
      max?: number
      precision?: number
    }
  }

  @ApiProperty({
    description: 'Параметры умения. В статусе',
  })
  state?: {
    instance: CapInstance,
    value: boolean
  }
}