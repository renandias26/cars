import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car-dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto)
    }

    @Get(':name')
    findOne(@Param('name') name: string) {
        try {
            return this.carsService.findOne(name)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message'
            },
                HttpStatus.FORBIDDEN,
                {
                    cause: error
                }
            )
        }
    }

    // @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.carsService.findAll()
    }
}
