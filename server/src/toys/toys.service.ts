import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrationValidationDto } from './dto/registrationValidation.dto';
import { RegistrationModel } from './model/registration.model';
import * as bcrypt from "bcrypt"

@Injectable()
export class ToysService {
  constructor(
    @InjectRepository(RegistrationModel)
    private registrationModel: Repository<RegistrationModel>,
  ) {}

  async allUsers() {
    return 'Erka';
  }

  async registration(bodyReq: RegistrationValidationDto) {
    const condidate = this.registrationModel.find({
      where: { email: bodyReq.email },
    });
    if (!condidate) {
      throw new Error(`Пользователь с таким ${bodyReq.email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(bodyReq.password, 3);
    const hashRepeatPassword = await bcrypt.hash(bodyReq.repeatPassword,3)
    const dataToDatabase = []
    const row = new RegistrationModel();
    row.name = bodyReq.name;
    row.login = bodyReq.login;
    row.password = hashPassword;
    row.repeatPassword = hashRepeatPassword;
    row.phone = bodyReq.phone;
    row.email = bodyReq.email;
    dataToDatabase.push(row)
    await this.registrationModel.save(dataToDatabase);
    return dataToDatabase;
  }
}
