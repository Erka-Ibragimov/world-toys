import { IsEmail, IsString } from 'class-validator';

export class RegistrationValidationDto {
  @IsString({ message: 'Пишите только буквы' })
  readonly name: string;
  @IsString({ message: 'Пишите только буквы' })
  readonly login: string;
  @IsString({ message: 'Пишите только буквы' })
  readonly password: string;
  @IsString({ message: 'Пишите только буквы' })
  readonly repeatPassword: string;
  @IsString({ message: 'Пишите только буквы' })
  readonly phone: string;
  @IsEmail({ message: 'Не правильно написана почта' })
  readonly email: string;
}
