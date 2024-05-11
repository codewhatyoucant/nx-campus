import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';

import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async createUser(@Body() createCatDto: CreateUserDTO) {
        await this.userService.create(createCatDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        await this.userService.delete(id);
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDTO) {
        await this.userService.update(id, updateUserDto);
    }
}
