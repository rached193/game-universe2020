import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CompetitionEntity } from 'src/model/competition.entity';
import { MatchEntity } from 'src/model/match.entity';

@Entity('round')
export class RoundEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @ManyToOne(type => CompetitionEntity, competition => competition.rounds)
    competition: CompetitionEntity;

    @IsNotEmpty()
    @Column('integer')
    round_num: number;

    @IsNotEmpty()
    @Column('integer')
    status: number;

    @OneToMany(type => MatchEntity, match => match.round)
    matches: MatchEntity[];
}