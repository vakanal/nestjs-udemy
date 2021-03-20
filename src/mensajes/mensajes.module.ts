import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesController } from './mensajes.controller';
import { MensajesService } from './mensajes.service';
import { MensajeRepository } from './repositories/mensaje.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MensajeRepository])],
  controllers: [MensajesController],
  providers: [MensajesService],
})
export class MensajesModule {}
