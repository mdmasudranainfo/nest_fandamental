import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dtos';

@Controller('users')
export class UsersController {
  usersService = new UsersService();

  // query request sended from client
  // @Get()
  // getUsers(@Query() query: { age?: string; name?: string }) {
  //   console.log(query);

  //   const result = this.usersService.getUsers();
  //   return {
  //     result,
  //     query,
  //   };
  // }

  //

  //

  // use pipes
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
  ) {
    console.log({ limit, page });

    const result = this.usersService.getUsers();
    return {
      result,
      limit,
      page,
    };
  }

  // params request sended from client
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }
  // multiple params request sended from client
  @Get(':id/:gender')
  getUserByIdDemo(@Param() params: { id: string; gender: string }) {
    return `User with ID ${params.id} and Gender ${params.gender}`;
  }
  @Post()
  createUser(
    @Body(new ValidationPipe())
    body: CreateUserDto
  ) {
    const user = {
      name: body.name,
      age: body.age,
      email: body.email,
    };
    this.usersService.createUser(user);
    console.log(user);
    return { message: 'User created' };
  }
}
