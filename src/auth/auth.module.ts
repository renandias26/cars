import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CarsModule } from 'src/cars/cars.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constats';

@Module({
    imports: [
        CarsModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
