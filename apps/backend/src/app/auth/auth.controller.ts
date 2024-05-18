import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { Payload } from './types/payload';
import { ApiTags, ApiOperation, ApiBody, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginDTO })
  @ApiOkResponse({
    description: 'User successfully logged in',
    schema: {
      example: {
        user: {
          username: 'username123',
          email: 'user@example.com',
          id: '60c72b2f9b1e8e0015c1e8e1',
        },
        token: 'jwt-token-example'
      }
    }
  })
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
