import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { RoundEntity } from 'src/competition/entities/round.entity';
import { GameEntity } from 'src/competition/entities/game.entity';

export enum StatusMatch {
    INACTIVE = 1, // El enfrentamiento está inactivo
    ACTIVE = 2, // El enfrentamiento está activo
    FINISHED = 3, // El enfrentamiento ha finalizado
  }

@Entity('match')
export class MatchEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @ManyToOne(type => RoundEntity, round => round.matches)
    round: RoundEntity;

    @IsNotEmpty()
    @Column('integer')
    matchNum: number;

    @IsNotEmpty()
    @Column('integer')
    competitorL: number;

    @IsNotEmpty()
    @Column('integer')
    competitorV: number;

    @Column('integer', { nullable: true })
    winner: number;

    @IsNotEmpty()
    @Column('integer')
    status: StatusMatch;

    @OneToMany(type => GameEntity, game => game.match)
    games: GameEntity[];
}