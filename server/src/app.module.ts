import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToysController } from './toys/toys.controller';
import { ToysService } from './toys/toys.service';
import { ToysModule } from './toys/toys.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationModel } from './toys/model/registration.model';
import { MailerModule } from './mailer/mailer.module';
import { CodeToysService } from './toys/codeToys.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root123',
      database: 'Toys',
      entities: [RegistrationModel],
      synchronize: true,
    }),
    ToysModule,
    MailerModule,
  ],
  controllers: [AppController, ToysController],
  providers: [AppService, ToysService,CodeToysService],
})
export class AppModule {}
