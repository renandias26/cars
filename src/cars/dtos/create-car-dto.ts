import { IsEmail, IsInt, IsNotEmpty, IsString, Max, MaxLength, MinLength } from 'class-validator'


export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    categorie: string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    carPlate: string
}