import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  Headers,
  Header
} from '@nestjs/common'

import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiBody,
} from '@nestjs/swagger'

import { AuthService } from './auth.service'

import { TokenDto } from './dto/token.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('')
  @ApiOperation({
    summary: 'Get Auth URL',
    description: 'the description',
  })
  getAuth(@Query('state') state: string, @Query('redirect_uri') redirect_uri: string) {
    return this.authService.getAuth(redirect_uri, state)
  }

  @Get('unlink')
  @ApiOperation({
    summary: 'Unlink User',
    description: 'the description',
  })
  @ApiHeader({ name: 'x-request-id' })
  getUnlink(@Headers('x-request-id') id: string) {
    return this.authService.getUnlink(id)
  }

  @Post('token')
  @ApiOperation({
    summary: 'Access Token / Refresh Token',
    description: 'the description',
  })
  postToken(@Body() tokenDto: TokenDto) {
    return this.authService.postToken(tokenDto)
  }
}
