import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Headers,
} from '@nestjs/common'

import {
  ApiTags,
  ApiOperation,
  ApiHeader,
} from '@nestjs/swagger'

import { AuthService, Unlink, Token } from './auth.service'

import { TokenDto } from './dto/token.dto'

@ApiTags('auth')
@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('')
  @ApiOperation({
    summary: 'Get Auth URL',
    description: 'Get the authorization link',
  })
  getAuth(@Query('state') state: string, @Query('redirect_uri') redirect_uri: string): Promise<string> {
    return this.authService.getAuth(redirect_uri, state)
  }

  @Get('unlink')
  @ApiOperation({
    summary: 'Unlink account',
    description: 'Unlink account in Yandex',
  })
  @ApiHeader({ name: 'x-request-id' })
  getUnlink(@Headers('x-request-id') id: string): Unlink {
    return this.authService.getUnlink(id)
  }

  @Post('token')
  @ApiOperation({
    summary: 'Access Token / Refresh Token',
    description: 'Get an Access Token / Refresh Token',
  })
  postToken(@Body() tokenDto: TokenDto): Promise<Token> {
    return this.authService.postToken(tokenDto)
  }
}
