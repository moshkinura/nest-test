import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'

import { config } from './orm.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
  ],
  controllers: [
    UsersController,
  ],
})

export class AppModule { }
