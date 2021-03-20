import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { MensajeEntity } from './entities/mensaje.entity';
import { CreateMensajeDto } from './dtos/create-mensaje.dto';

@Controller('mensajes')
export class MensajesController {
  constructor(private readonly _mensajesService: MensajesService) {}

  @Post()
  create(@Body() createMensajesDto: CreateMensajeDto): Promise<MensajeEntity> {
    return this._mensajesService.createMensaje(createMensajesDto);
  }

  @Get()
  getAll(): Promise<MensajeEntity[]> {
    return this._mensajesService.getAll();
  }

  @Patch(':mensajeId')
  update(
    @Param('mensajeId', ParseIntPipe) mensajeId: number,
    @Body() updateMensajeDto: CreateMensajeDto,
  ): Promise<boolean> {
    return this._mensajesService.updateMensaje(mensajeId, updateMensajeDto);
  }

  @Delete(':mensajeId')
  delete(
    @Param('mensajeId', ParseIntPipe) mensajeId: number,
  ): Promise<boolean> {
    return this._mensajesService.deleteMensaje(mensajeId);
  }
}
