import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schemas/Car.schema';
import { CarsController } from './cars.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  providers: [CarsService],
  exports: [CarsService],
  controllers: [CarsController],
})
export class CarsModule { }
