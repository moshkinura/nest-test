import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auth } from './entities/auth.entity'
import { TokenDto } from './dto/token.dto'

import { JwtService } from '@nestjs/jwt'

export interface Unlink {
  request_id: string
}

export interface Token {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
    private jwtService: JwtService
  ) { }

  async getAuth(redirect_uri: string, state: string): Promise<string> {
    const LOGIN: string = 'camelhome'
    //const uid: string = '61e3296e7e9b03f0830bc7c7'

    let user = await this.authRepository.findOne(
      {
        where: { login: LOGIN }
      }
    )

    return `${redirect_uri}?code=${user?.code}&state=${state}`
  }

  getUnlink(id: string): Unlink {
    return {
      request_id: id
    }
  }

  async postToken(tokenDto: TokenDto): Promise<Token> {
    const code = tokenDto.code // код юзвера

    let user = await this.authRepository.findOne(
      {
        where: { code }
      }
    )

    const payload = {
      login: user.login,
      sub: user.id,
    }

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload),
      token_type: 'bearer',
      expires_in: 2592000,
    }
  }
}
