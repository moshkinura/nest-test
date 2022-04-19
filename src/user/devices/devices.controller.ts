import {
  Controller,
  Get,
  Post,
  Headers,
  UseGuards,
  Req,
} from '@nestjs/common'

import { Request } from 'express'

import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiBearerAuth,
} from '@nestjs/swagger'

import { DevicesService } from './devices.service'
import { AllDevicesDto } from './dto/all-devices.dto'

import { JwtAuthGuard } from '../../auth/jwt-auth.guard'

@ApiTags('user/devices')
@Controller({
  path: 'user/devices',
  version: '1.0'
})
@ApiBearerAuth('token')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @UseGuards(JwtAuthGuard)
  @Get('')
  @ApiOperation({
    summary: 'Get devices all',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  async getDevices(@Headers('x-request-id') id: string, @Req() request: Request): Promise<AllDevicesDto> {
    const authorization = request?.headers?.authorization?.split('Bearer ')[1]

    return await this.devicesService.getDevices(id, authorization)
  }

  @UseGuards(JwtAuthGuard)
  @Post('query')
  @ApiOperation({
    summary: 'Device status information',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  postDevicesQuery(@Headers('x-request-id') id: string, @Req() request: Request): Promise<AllDevicesDto> {
    const authorization = request?.headers?.authorization?.split('Bearer ')[1]

    return this.devicesService.postDevicesQuery(id, authorization)
  }

  @UseGuards(JwtAuthGuard)
  @Post('action')
  @ApiOperation({
    summary: 'Changing the state of the device',
    description: 'the description'
  })
  @ApiHeader({ name: 'x-request-id' })
  postDevicesAction(@Headers('x-request-id') id: string, @Req() request: Request): Promise<AllDevicesDto> {
    const authorization = request?.headers?.authorization?.split('Bearer ')[1]

    return this.devicesService.postDevicesAction(id, authorization)
  }
}
