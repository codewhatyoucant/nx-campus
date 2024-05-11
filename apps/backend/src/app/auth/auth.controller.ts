import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { Payload } from './types/payload';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,

    ) { }

    @Post('login')
    async login(@Body() loginDTO: LoginDTO) {
        const user = await this.userService.findByLogin(loginDTO);
        const payload: Payload = {
            username: user.username,
            email: user.email,
            sub: user.id,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }

}