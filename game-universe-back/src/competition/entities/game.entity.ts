import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { MatchEntity } from 'src/competition/entities/match.entity';

export enum StatusGame {
    INACTIVE = 1, // La partida está inactiva
    ACTIVE = 2, // La partida está activa
    FINISHED = 3, // La partida ha finalizado
  }

@Entity('game')
export class GameEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @ManyToOne(type => MatchEntity, match => match.games)
    match: MatchEntity;

    @IsNotEmpty()
    @Column('integer')
    gameNum: number;

    @Column('integer', { nullable: true })
    winner: number;

    @IsNotEmpty()
    @Column('integer')
    status: StatusGame;
}