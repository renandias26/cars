import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dtos/create-car-dto';
import { Car } from './schemas/car.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {

  constructor(@InjectModel(Car.name) private CarModel: Model<Car>) { }

  async create(createCarDto: CreateCarDto) {
    this.CarModel.create(createCarDto)
  }

  findOne(Carname: string) {
    const findedCar = this.CarModel.findOne({ Carname: Carname })
    return findedCar
  }

  findAll() {
    const findedCars = this.CarModel.find()
    return findedCars
  }
}