import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { Roles } from '../roles.decorator';

@Controller('admin')
export class AdminController {
  @Get()
  @UseGuards(AuthGuard)
  @Roles('admin')
  async getAdminResource() {
    return { message: 'This is an admin resource' };
  }
}
