import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodeValidationDto } from './dto/codeValidation.dto';
import { RegistrationModel } from './model/registration.model';


@Injectable()
export class CodeToysService {
  constructor(
    @InjectRepository(RegistrationModel)
    private registrationModel: Repository<RegistrationModel>,
  ) {}
    
  async code(bodyReq:CodeValidationDto){
    const condidate = await this.registrationModel.find({where:{activatedNumber:bodyReq.code}})
    if(!condidate){
      throw new Error('Не правильно ввели код регистрации');
    }
    return {message:'Вы успешно прошли регистрацию'};
  }
}
