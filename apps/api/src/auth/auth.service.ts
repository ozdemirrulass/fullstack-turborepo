import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    registerUser(createUserDto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }
}
