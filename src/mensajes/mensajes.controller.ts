import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto';

@Controller('mensajes')
export class MensajesController {
  @Post()
  create(@Body() createMensajesDto: CreateMensajeDto): string {
    console.log(createMensajesDto);
    return 'Mensaje creado';
  }

  @Get()
  getAll(): string[] {
    return ['Lista de mensajes'];
  }

  @Put(':mensajeId')
  update(@Body() updateMensajeDto: CreateMensajeDto): string {
    console.log(updateMensajeDto);
    return 'Mensaje actualizdo';
  }

  @Delete(':mensajeId')
  delete(): string {
    return 'Mensaje eliminado';
  }
}
