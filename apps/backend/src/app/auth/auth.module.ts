import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';


@Module({
    imports: [UserModule, JwtModule.register({
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '7d' }
    })],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})

export class AuthModule { }