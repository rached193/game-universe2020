import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from './competition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class CompetitionService extends TypeOrmCrudService<CompetitionEntity> {
	constructor (@InjectRepository(CompetitionEntity) repo) {
		super(repo)
	} 
}
