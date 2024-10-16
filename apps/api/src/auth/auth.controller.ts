import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-guards/jwt-guards.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post("signup")
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto)
  }

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  login(@Request() req) {
    return this.authService.login(req.user.id, req.user.name)
  }

  @UseGuards(JwtAuthGuard)
  @Get("protected-dummy")
  dummy(@Request() req) {
    return {
      message: `dummy api user id: ${req.user.id}`
    }
  }

  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user.id, req.user.name)
  }
}
