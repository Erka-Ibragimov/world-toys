import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationModel } from './model/registration.model';
import { ToysController } from './toys.controller';
import { ToysService } from './toys.service';

@Module({
  providers: [ToysService],
  controllers: [ToysController],
  exports:[TypeOrmModule],
  imports: [TypeOrmModule.forFeature([RegistrationModel])],
})
export class ToysModule {}
