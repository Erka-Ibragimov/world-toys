export class RegistrationValidationDto{
    readonly name: string;
    readonly login: string;
    readonly password: string;
    readonly repeatPassword: string;
    readonly phone: number;
    readonly email: string
}