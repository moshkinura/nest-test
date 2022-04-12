import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { UserDto } from './dto/user.dto'

import { ApiTags, ApiOperation,  } from '@nestjs/swagger'

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1.0',
})
export class UsersControllerV1 {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiOperation({
    summary: 'Create cat',
    description: 'the follow',
    // deprecated: true, // если depricated
    // externalDocs: {description: '123', url:'321'} // удаленная документация
  })
  create(@Body() createUserDto: UserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UserDto) {
    return this.usersService.updateOne(id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.deleteOne(+id)
  }
}

@ApiTags('users')
@Controller({
  path: 'users',
  version: '2.0',
})
export class UsersControllerV2 {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: UserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UserDto) {
    return this.usersService.updateOne(id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.deleteOne(+id)
  }
}
