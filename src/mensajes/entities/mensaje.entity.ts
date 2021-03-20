import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mensaje')
export class MensajeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  mensaje: string;
}
