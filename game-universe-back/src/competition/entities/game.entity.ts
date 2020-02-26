// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
// import { IsNotEmpty } from 'class-validator';
// import { MatchEntity } from 'src/competition/entities/match.entity';

// @Entity('game')
// export class GameEntity {
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     @IsNotEmpty()
//     @ManyToOne(type => MatchEntity, match => match.games)
//     match: MatchEntity;

//     @IsNotEmpty()
//     @Column('integer')
//     game_num: number;

//     @Column('integer')
//     winner: number;

//     @IsNotEmpty()
//     @Column('integer')
//     status: number;
// }