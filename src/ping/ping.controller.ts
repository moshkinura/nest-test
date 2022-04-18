import {
  Controller,
  Get,
  Res,
  HttpStatus
} from '@nestjs/common'
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger'
import { Response } from 'express'

@ApiTags('')
@Controller({
  path: '',
  version: '1.0'
})
export class PingController {
  constructor() { }

  @Get()
  @ApiResponse({ status: 200, description: 'Successful response' })
  @ApiOperation({
    summary: 'Ping service',
    description: `Периодическая проверка доступности Endpoint URL провайдера.`
  })
  ping(@Res() res: Response): void {
    res.status(HttpStatus.OK).send('OK')
  }
}
