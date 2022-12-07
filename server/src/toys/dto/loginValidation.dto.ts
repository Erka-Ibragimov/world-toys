import { IsEmail, IsString } from "class-validator";

export class LoginValidationDto {
  @IsString({message:'Пишите только буквы'})
  readonly password: string;
  @IsEmail({message:'Не правильно написана почта'})
  readonly email: string;
}
