import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { RoundEntity } from 'src/model/round.entity';
import { GameEntity } from 'src/model/game.entity';

@Entity('match')
export class MatchEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @ManyToOne(type => RoundEntity, round => round.matches)
    round: RoundEntity;

    @IsNotEmpty()
    @Column('integer')
    match_num: number;

    @IsNotEmpty()
    @Column('integer')
    competitor_l: number;

    @IsNotEmpty()
    @Column('integer')
    competitor_v: number;

    @Column('integer')
    winner: number;

    @IsNotEmpty()
    @Column('integer')
    status: number;

    @OneToMany(type => GameEntity, game => game.match)
    games: GameEntity[];
}