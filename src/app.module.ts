import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'

import { config } from './orm.config'
import { DevicesModule } from './user/devices/devices.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    // UsersModule,
    DevicesModule,
    AuthModule,
  ],
  // controllers: [
  //   UsersController,
  // ],
})

export class AppModule { }
