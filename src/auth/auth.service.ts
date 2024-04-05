import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private carsService: UsersService, private jwtService: JwtService) { }

    async signIn(username: string, password: string) {

    }
}
