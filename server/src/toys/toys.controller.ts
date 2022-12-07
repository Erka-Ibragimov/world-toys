import { Body, Controller, Get, Post } from '@nestjs/common';
import { CodeToysService } from './codeToys.service';
import { CodeValidationDto } from './dto/codeValidation.dto';
import { LoginValidationDto } from './dto/loginValidation.dto';
import { RegistrationValidationDto } from './dto/registrationValidation.dto';
import { SendMyEmailValidationDto } from './dto/sendMyEmailValidation.dto';
import { SendMyEmailToysService } from './sendMyEmailToys.service';
import { ToysService } from './toys.service';

@Controller('toys')
export class ToysController {
  constructor(
    private toysService: ToysService,
    private codeToysService: CodeToysService,
    private sendMyEmailService: SendMyEmailToysService,
  ) {}

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
  @Post('/code')
  code(@Body() bodyReq:CodeValidationDto){
    return this.codeToysService.code(bodyReq);
  }
  @Post('/myEmail')
  sendMyEmail(@Body() bodyReq:SendMyEmailValidationDto){
    return this.sendMyEmailService.sendMyEmail(bodyReq)
  }
}
