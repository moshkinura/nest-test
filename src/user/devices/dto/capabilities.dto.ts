import { ApiProperty } from '@nestjs/swagger'

enum TypeCapabilities {
  "devices.capabilities.on_off",
  "devices.capabilities.color_setting",
  "devices.capabilities.video_stream", //TODO: В разработке/бета тестирование
  "devices.capabilities.mode",
  "devices.capabilities.range",
  "devices.capabilities.toggle",
}

enum ColorModel {
  "hsv",
  "rgb",
}

enum Protocol {
  "hls",
  "progressive_mp4",
}

enum Instance {
  "cleanup_mode",
  "coffee_mode",
  "dishwashing",
  "fan_speed",
  "heat",
  "input_source",
  "program",
  "swing",
  "tea_mode",
  "thermostat",
  "work_speed",
}

enum Unit {
  "brightness",
  "channel",
  "humidity",
  "open",
  "temperature",
  "volume",
}

enum Modes {
  "auto",
  "eco",
  "turbo",
  "cool",
  "dry",
  "fan_only",
  "heat",
  "preheat",
  "high",
  "low",
  "medium",
  "max",
  "min",
  "fast",
  "slow",
  "express",
  "normal",
  "quiet",
  "horizontal",
  "stationary",
  "vertical",
  "one",
  "two",
  "three", //TODO: one, two, ..., ten
  "americano",
  "cappuccino",
  "double_espresso",
  "espresso",
  "latte",
  "black_tea",
  "flower_tea",
  "green_tea",
  "herbal_tea",
  "ooling_tea",
  "puerh_tea",
  "red_tea",
  "white_tea",
  "glass",
  "intensive",
  "pre_rinse",
  "aspic",
  "baby_food",
  "baking",
  "bread",
  "boiling",
  "cereals",
  "cheesecake",
  "deep_fryer",
  "dessert",
  "fowl",
  "frying",
  "macaroni",
  "milk_porridge",
  "multicooker",
  "pasta",
  "pilaf",
  "pizza",
  "sauce",
  "slow_cook",
  "soup",
  "steam",
  "stewing",
  "vacuum",
  "yogurt",
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
  parameters: {
    split?: boolean

    color_model?: ColorModel
    temperature_k?: {
      min?: number
      max?: number
      precision?: number
    }

    //TODO: Warning!!!
    // color_scene?: {
    //   scenes?: [
    //     {
    //       id: string
    //     }
    //   ]
    // }

    instance?: Instance
    protocol?: Protocol

    //TODO: Warning!!!
    // modes?: {
    //   mode?: [
    //     {
    //       value: Modes
    //     }
    //   ]
    // }

    unit?: Unit
    range?: {
      min?: number
      max?: number
      precision?: number
    }
  }
}