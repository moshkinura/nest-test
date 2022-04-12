import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service'
import { UsersControllerV1, UsersControllerV2 } from './users.controller'
import { User } from './entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    UsersControllerV1,
    UsersControllerV2
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
