import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }

  async create(user: UserDto): Promise<User> {
    const newUser = this.userRepository.create(user)
    await this.userRepository.save(newUser)
    return newUser
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } })
  }

  async updateOne(id: number, user: UserDto): Promise<User> {
    await this.userRepository.update(id, user)
    return this.findOne(id)
  }

  async deleteOne(id: number): Promise<{ deleted: boolean, message?: string }> {
    try {
      await this.userRepository.delete({ id })
      return { deleted: true }
    } catch (err) {
      return { deleted: false, message: err.message }
    }
  }
}
