import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { AuthService } from './auth.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
      private readonly authService: AuthService,
      private reflector: Reflector,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const roles = this.reflector.get<string[]>('roles', context.getHandler());
      const request = context.switchToHttp().getRequest();
      const { authorization }: any = request.headers;
      
      if (!authorization || authorization.trim() === '') {
        throw new UnauthorizedException('Please provide token');
      }
      
      const authToken = authorization.replace(/bearer/gim, '').trim();
      try {
        const resp = await this.authService.validateToken(authToken);
        request.decodedData = resp;
  
        if (roles && roles.length > 0 && !roles.includes(resp.role)) {
          throw new ForbiddenException('You do not have the necessary permissions');
        }
  
        return true;
      } catch (error) {
        console.log('auth error - ', error.message);
        throw new ForbiddenException(error.message || 'session expired! Please sign In');
      }
    }
  }
  