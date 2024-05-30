import { Injectable } from '@nestjs/common';
import { Payload } from './types/payload';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signPayload(payload: Payload) {
        return this.jwtService.sign(payload);
    }

    async validateToken(token: string) {
        return this.jwtService.verifyAsync(token, { secret: process.env.SECRET_KEY });
    }

    decodeToken(token: string) {
        return this.jwtService.decode(token);
    }
}