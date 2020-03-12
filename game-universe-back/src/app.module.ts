import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionEntity } from './competition/entities/competition.entity';
import { CompetitionModule } from './competition/competition.module';
import { AccountModule } from './account/account.module';
import { AccountEntity } from './account/account.entity';
import { FormatEntity } from './competition/entities/format.entity';
import { BoEntity } from './competition/entities/bo.entity';
import { CompetitorEntity } from './competition/entities/competitor.entity';
import { RoundEntity } from './competition/entities/round.entity';
import { MatchEntity } from './competition/entities/match.entity';
import { GameEntity } from './competition/entities/game.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    schema: 'game_universe_2020',
    username: 'xbbhrkvssfuetu',
    host: 'ec2-54-195-252-243.eu-west-1.compute.amazonaws.com',
    database: 'dcbdsmfutcv57e',
    password: 'a13806713fe574ff9dfa2288840c12ca9f66ab2579e851341a8ce87c4e2ce15c',
    port: 5432,
    ssl: true,
    entities: [CompetitionEntity, AccountEntity, FormatEntity, BoEntity, CompetitorEntity, RoundEntity, MatchEntity, GameEntity],
    synchronize: true,
  }),
    CompetitionModule,
    AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
