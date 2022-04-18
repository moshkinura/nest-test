import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Auth } from './entities/auth.entity'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'
import { jwtConstants } from './constants'

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})

export class AuthModule { }