import { IsInt } from "class-validator";

export class CodeValidationDto{
    @IsInt({message:'Пишите только цифры'})
    readonly code: number;
}