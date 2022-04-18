import { Module } from '@nestjs/common'
import { DevicesService } from './devices.service'
import { DevicesController } from './devices.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Device } from './entities/device.entity'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '../../auth/constants'

@Module({
  imports: [
    TypeOrmModule.forFeature([Device]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [DevicesController],
  providers: [DevicesService],
  exports: [DevicesService]
})

export class DevicesModule { }
