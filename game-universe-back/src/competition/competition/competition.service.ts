import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from '../entities/competition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository, InsertResult } from 'typeorm';

@Injectable()
// export class CompetitionService extends TypeOrmCrudService<CompetitionEntity> {
export class CompetitionService {
  constructor(@InjectRepository(CompetitionEntity) private repo: Repository<CompetitionEntity>) {
  }

  insert(account: CompetitionEntity): Promise<InsertResult> {
    return this.repo.insert(account);
  }

  findAll(): Promise<CompetitionEntity[]> {
    return this.repo.find();
  }
}
