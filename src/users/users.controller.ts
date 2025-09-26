import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  usersService = new UsersService();
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param() params: { id: string }) {
    const paramsId = parseInt(params.id);
    return this.usersService.getUserById(paramsId);
  }

  @Get(':id/:gender')
  getUserByIdDemo(@Param() params: { id: string; gender: string }) {
    return `User with ID ${params.id} and Gender ${params.gender}`;
  }
  @Post()
  createUser() {
    const user = {
      name: 'New User',
      age: 20,
      email: 'new.user@example.com',
    };
    this.usersService.createUser(user);
    return { message: 'User created' };
  }
}
