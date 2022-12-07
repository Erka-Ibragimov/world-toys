import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeToysService } from './codeToys.service';
import { RegistrationModel } from './model/registration.model';
import { SendMyEmailToysService } from './sendMyEmailToys.service';
import { ToysController } from './toys.controller';
import { ToysService } from './toys.service';

@Module({
  providers: [ToysService, CodeToysService, SendMyEmailToysService],
  controllers: [ToysController],
  exports: [TypeOrmModule],
  imports: [
    TypeOrmModule.forFeature([RegistrationModel]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.yandex.ru',
        secure: false,
        auth: {
          user: 'erkaibragimov@yandex.ru',
          pass: 'stoymdholafokfdl',
        },
      },
    }),
  ],
})
export class ToysModule {}
