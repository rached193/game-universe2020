import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from './competition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

@Injectable()
// export class CompetitionService extends TypeOrmCrudService<CompetitionEntity> {
export class CompetitionService {
  constructor(@InjectRepository(CompetitionEntity) private repo: Repository<CompetitionEntity>) {
  }

  findAll(): Promise<CompetitionEntity[]> {
    return this.repo.find();
  }
}
