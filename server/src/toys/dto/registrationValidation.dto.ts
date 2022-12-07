import { IsEmail, IsInt, IsString } from "class-validator";

export class RegistrationValidationDto{
    @IsString({message:'Пишите только буквы'})
    readonly name: string;
    @IsString({message:'Пишите только буквы'})
    readonly login: string;
    @IsString({message:'Пишите только буквы'})
    readonly password: string;
    @IsString({message:'Пишите только буквы'})
    readonly repeatPassword: string;
    @IsInt({message:'Пишите только цифры'})
    readonly phone: number;
    @IsEmail({message:'Не правильно написана почта'})
    readonly email: string
}