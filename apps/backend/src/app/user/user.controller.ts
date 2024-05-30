import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';

import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { AuthGuard } from '../auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private jwtService: JwtService) { }

    @UseGuards(AuthGuard)
    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getUserProfile(@Request() req: any): Promise<User> {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = this.jwtService.decode(token); // Decode the token

        if (!decoded) {
            throw new UnauthorizedException();
        }

        const id = decoded['id'];
        return this.userService.findOne(id);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
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
