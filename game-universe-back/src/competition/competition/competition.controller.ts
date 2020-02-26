import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionEntity, StatusCompetition } from '../entities/competition.entity';

@Controller('competition')
export class CompetitionController {
  constructor(private service: CompetitionService) { }

  @Get()
  findAll(): Promise<CompetitionEntity[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() competition: CompetitionEntity) {
    competition.status = StatusCompetition.CREATE;
    return this.service.insert(competition);
  }
}
