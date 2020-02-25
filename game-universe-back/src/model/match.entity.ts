import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { IsNotEmpty } from 'class-validator';
import { RoundEntity } from './round.entity';

@Entity('match')
export class MatchEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    /*@IsNotEmpty()
    @Column('integer')
    round: number*/
    /*@ManyToOne(type => RoundEntity, round => round.matches)
    round: RoundEntity;*/

    /*@IsNotEmpty()*/
    @Column('integer')
    match: number

    

    @Column('integer')
    status: number
}