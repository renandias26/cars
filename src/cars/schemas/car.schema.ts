import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CarDocument = HydratedDocument<Car>

@Schema({ timestamps: true})
export class Car {
    @Prop({ required: true })
    categorie: string

    @Prop({ required: true })
    name: string

    @Prop()
    carPlate: string
}

export const CarSchema = SchemaFactory.createForClass(Car)