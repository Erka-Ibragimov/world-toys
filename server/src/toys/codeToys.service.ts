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

  async code(bodyReq: CodeValidationDto) {
    const condidate = await this.registrationModel.find({
      where: { activatedNumber: bodyReq.code },
    });
    if (condidate.length == 0) {
      throw new Error('Не правильно ввели код регистрации');
    }
    condidate[0].isActicated = true;
    await this.registrationModel.save(condidate[0]);
    return { message: 'Вы успешно прошли регистрацию' };
  }
}
