import { IsString } from 'class-validator';

export class CodeValidationDto {
  @IsString({ message: 'Пишите только буквы' })
  readonly code: string;
}
