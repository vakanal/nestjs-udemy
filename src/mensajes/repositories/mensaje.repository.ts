import { EntityRepository, Repository } from 'typeorm';
import { MensajeEntity } from '../entities/mensaje.entity';

@EntityRepository(MensajeEntity)
export class MensajeRepository extends Repository<MensajeEntity> {}
