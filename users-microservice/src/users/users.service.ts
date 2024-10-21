import { InjectRepository } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  getUserById(userId: string) {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['payments'],
    });
  }
}
