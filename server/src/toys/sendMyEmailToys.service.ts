import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SendMyEmailValidationDto } from './dto/sendMyEmailValidation.dto';

@Injectable()
export class SendMyEmailToysService {
  constructor(private mailService: MailerService) {}

  async sendMyEmail(bodyReq: SendMyEmailValidationDto) {
    try {
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
      if (!sendMyEmail) {
        throw new HttpException('Ошибка отправки письма', HttpStatus.FORBIDDEN);
      }
      return { message: 'Спасибо, ваше письмо отправилось' };
    } catch (e) {
      return e;
    }
  }
}
