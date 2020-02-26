import { Module } from '@nestjs/common';
import { CompetitionService } from './competition/competition.service';
import { CompetitionController } from './competition/competition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionEntity } from './entities/competition.entity';

@Module({
  providers: [CompetitionService],
  controllers: [CompetitionController],
  imports: [
    TypeOrmModule.forFeature([CompetitionEntity]),
  ],
})
export class CompetitionModule { }
