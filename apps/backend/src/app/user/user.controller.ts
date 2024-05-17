import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'List of users', type: [User] })
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: CreateUserDTO })
  @ApiOkResponse({ description: 'User Created', type: User })
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User' })
  @ApiOkResponse({ description: 'User Deleted' })
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.userService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update User' })
  @ApiBody({ type: CreateUserDTO })
  @ApiOkResponse({ description: 'User Updated', type: User })
  async updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDTO): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
}
