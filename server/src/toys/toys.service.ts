import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrationValidationDto } from './dto/registrationValidation.dto';
import { RegistrationModel } from './model/registration.model';
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';
import { LoginValidationDto } from './dto/loginValidation.dto';

@Injectable()
export class ToysService {
  constructor(
    @InjectRepository(RegistrationModel)
    private registrationModel: Repository<RegistrationModel>,
    private mailService: MailerService,
  ) {}

  async allUsers() {
    return 'Erka';
  }

  async registration(bodyReq: RegistrationValidationDto) {
    try {
      const condidate = this.registrationModel.find({
        where: { email: bodyReq.email },
      });
      console.log(condidate);
      if (!condidate) {
        throw new Error(`Пользователь с таким ${bodyReq.email} уже существует`);
      }
      const hashPassword = await bcrypt.hash(bodyReq.password, 3);
      const hashRepeatPassword = await bcrypt.hash(bodyReq.repeatPassword, 3);
      const randomNumber = Math.floor(1000 + Math.random() * 900);
      await this.mailService.sendMail({
        from: `erkaibragimov@yandex.ru`,
        to: bodyReq.email,
        subject: 'Активация аккаунта на' + 'http://localhost:7000',
        text: 'Код',
        html: `
            <div>
            <h1>Это ваш код для регистрации</h1>
            <h2>${randomNumber}</h2>
            </div>
            `,
      });
      const dataToDatabase = [];
      const row = new RegistrationModel();
      row.name = bodyReq.name;
      row.login = bodyReq.login;
      row.password = hashPassword;
      row.repeatPassword = hashRepeatPassword;
      row.phone = bodyReq.phone;
      row.email = bodyReq.email;
      row.activatedNumber = randomNumber;
      dataToDatabase.push(row);
      await this.registrationModel.save(dataToDatabase);
      return dataToDatabase;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async login(bodyReq: LoginValidationDto) {
    const dataFromDatabase = await this.registrationModel.find({
      where: { email: bodyReq.email },
    });
    if (!dataFromDatabase) {
      throw new Error(`Пользователь с таким ${bodyReq.email} не существует`);
    }
    const isPassEquals = await bcrypt.compare(
      bodyReq.password,
      dataFromDatabase[0].password,
    );
    if (!isPassEquals) {
      throw new Error('Не правильный пароль!');
    }
    return dataFromDatabase;
  }
}
