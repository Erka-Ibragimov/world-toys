import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMyEmailValidationDto } from './dto/sendMyEmailValidation.dto';

@Injectable()
export class SendMyEmailToysService {
  constructor(
    private mailService: MailerService,
  ) {}

  async sendMyEmail(bodyReq:SendMyEmailValidationDto) {
    const sendMyEmail = await this.mailService.sendMail({
      from: `erkaibragimov@yandex.ru`,
      to: `erkaibragimov@yandex.ru`,
      subject: 'Активация аккаунта на' + 'http://localhost:7000',
      text: 'Письмо',
      html: `
          <div>
          <h2>${bodyReq.text}</h2>
          </div>
          `,
    });
    if(!sendMyEmail){
      return {message:"Ошибка отправки письма"}
    }
    return {message:"Спасибо, ваше письмо отправилось"}
  }
}
