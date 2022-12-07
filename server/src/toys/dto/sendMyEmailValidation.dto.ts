import { IsString } from "class-validator";

export class SendMyEmailValidationDto{
    @IsString({message:'Пишите только буквы'})
    readonly text: string;
}