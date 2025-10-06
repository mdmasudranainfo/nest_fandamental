import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Pagination example using query params
  @Get()
  async getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
  ) {
    const users = await this.usersService.getUsers(limit, page);
    return {
      success: true,
      page,
      limit,
      data: users,
    };
  }

  // Get single user by ID
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.getUserById(id);
    return { success: true, data: user };
  }

  // Create a new user
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.usersService.createUser(body);
    return { success: true, message: 'User created successfully', data: user };
  }
}
