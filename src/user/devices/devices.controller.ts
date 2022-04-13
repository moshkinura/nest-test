import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common'

import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger'

import { DevicesService } from './devices.service'
import { AllDevicesDto } from './dto/all-devices.dto'

@ApiTags('user/devices')
@Controller({
  path: 'user/devices',
  version: '1.0'
})
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @Get('')
  @ApiOperation({
    summary: 'Get devices all',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  @ApiBearerAuth()
  getDevices(@Headers('x-request-id') id: string, @Headers() headers: object): AllDevicesDto {
    return this.devicesService.getDevices(headers)
  }
}
