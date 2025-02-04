import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({
    cmd: 'createUser',
  })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: 'getUserById' })
  getUserById(@Payload() data) {
    console.log(data);
    const { userId } = data;
    return this.usersService.getUserById(userId);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data) {
    console.dir(data, { depth: Infinity });
  }
}
