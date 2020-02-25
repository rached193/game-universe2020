import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { IsNotEmpty } from 'class-validator';
//import { CompetitionEntity } from './competition.entity';
import { MatchEntity } from './match.entity';

@Entity('round')
export class RoundEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    /*@IsNotEmpty()
    @Column('integer')
    competition: number*/
    /*@ManyToOne(type => CompetitionEntity, competition => competition.rounds)
    competition: CompetitionEntity;*/

    /*@IsNotEmpty()*/
    @Column('integer')
    round: number

    @Column('integer')
    status: number

    /*@OneToMany(type => MatchEntity, match => match.round)
    matches: MatchEntity[]*/
}