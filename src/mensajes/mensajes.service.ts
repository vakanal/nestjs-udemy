import { Injectable } from '@nestjs/common';
import { MensajeRepository } from './repositories/mensaje.repository';
import { CreateMensajeDto } from './dtos/create-mensaje.dto';
import { MensajeEntity } from './entities/mensaje.entity';

@Injectable()
export class MensajesService {
  constructor(private readonly _mensajeRepository: MensajeRepository) {}

  async getAll(): Promise<MensajeEntity[]> {
    return await this._mensajeRepository.find();
  }

  async createMensaje(mensaje: CreateMensajeDto): Promise<MensajeEntity> {
    const nuevoMensaje: MensajeEntity = new MensajeEntity();

    nuevoMensaje.nick = mensaje.nick;
    nuevoMensaje.mensaje = mensaje.mensaje;

    return await this._mensajeRepository.save(nuevoMensaje);
  }

  async updateMensaje(
    mensajeId: number,
    mensaje: CreateMensajeDto,
  ): Promise<boolean> {
    await this._mensajeRepository.update(mensajeId, mensaje);

    return true;
  }

  async deleteMensaje(mensajeId: number): Promise<boolean> {
    await this._mensajeRepository.delete(mensajeId);

    return true;
  }
}
