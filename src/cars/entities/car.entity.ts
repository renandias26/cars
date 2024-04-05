import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema({ timestamps: true })
export class Car {
    @Prop()
    name: string;

    @Prop()
    Category: CarsCategory;

    @Prop()
    Avaliable: boolean

    @Prop()
    Model: String

    @Prop()
    Brand: String

    @Prop()
    Plate: String
}

export const CarSchema = SchemaFactory.createForClass(Car);