import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { MatchEntity } from 'src/competition/entities/match.entity';
import { CompetitionEntity } from 'src/competition/entities/competition.entity';

export enum StatusRound {
    INACTIVE = 1, // La ronda está inactiva
    ACTIVE = 2, // La ronda está activa
    FINISHED = 3, // La ronda ha finalizado
  }

@Entity('round')
export class RoundEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
//    @ManyToOne(type => CompetitionEntity, competition => competition.rounds)
    competition: CompetitionEntity;

    @IsNotEmpty()
    @Column('integer')
    roundNum: number;

    @IsNotEmpty()
    @Column('integer')
    status: StatusRound;

    @OneToMany(type => MatchEntity, match => match.round)
    matches: MatchEntity[];
}