import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  UseGuards,
  Req,
} from '@nestjs/common'

import { Request } from 'express'

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
@ApiBearerAuth('token')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @Get('')
  @ApiOperation({
    summary: 'Get devices all',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  
  // @UseGuards(JwtAuthenticationGuard)
  getDevices(@Headers('x-request-id') id: string, @Req() request: Request): AllDevicesDto {
    const authorization = request?.headers?.authorization?.replace('Bearer', '')
    
    return this.devicesService.getDevices(id, authorization)
  }

  @Post('query')
  @ApiOperation({
    summary: 'Device status information',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  postDevicesQuery(@Headers('x-request-id') id: string, @Req() request: Request): AllDevicesDto {
    const authorization = request?.headers?.authorization?.replace('Bearer', '')

    return this.devicesService.postDevicesQuery(id, authorization)
  }

  @Post('action')
  @ApiOperation({
    summary: 'Changing the state of the device',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  postDevicesAction(@Headers('x-request-id') id: string, @Req() request: Request): AllDevicesDto {
    const authorization = request?.headers?.authorization?.replace('Bearer', '')

    return this.devicesService.postDevicesAction(id, authorization)
  }
}
