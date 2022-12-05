import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginValidationDto } from './dto/loginValidation.dto';
import { RegistrationValidationDto } from './dto/registrationValidation.dto';
import { ToysService } from './toys.service';

@Controller('toys')
export class ToysController {
  constructor(private toysService: ToysService) {}

  @Get('/getUsers')
  alUsers() {
    return this.toysService.allUsers();
  }

  @Post('/registration')
  registration(@Body() bodyReq: RegistrationValidationDto) {
    return this.toysService.registration(bodyReq);
  }
  @Post('/login')
  login(@Body() bodyReq: LoginValidationDto) {
    return this.toysService.login(bodyReq);
  }
}
