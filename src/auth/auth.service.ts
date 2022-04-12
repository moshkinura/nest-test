import { Injectable } from '@nestjs/common'
import { TokenDto} from './dto/token.dto'

@Injectable()
export class AuthService {
  getAuth(redirect_uri: string, state: string){
    const code = '12345'
    return `${redirect_uri}?code=${code}&state=${state}`
  }

  getUnlink(id: any) {
    return {
      request_id: id
    }
  }

  postToken(tokenDto: TokenDto) {
    return {
      access_token: 'token-'+tokenDto.code,
      token_type: 'bearer',
      expires_in: 2592000,
      refresh_token: 'refresh-'+tokenDto.code,
    }
  }
}
