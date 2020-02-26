// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
// import { IsNotEmpty } from 'class-validator';

// import { MatchEntity } from 'src/competition/entities/match.entity';
// import { CompetitionEntity } from './entities/competition.entity';

// @Entity('round')
// export class RoundEntity {
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     @IsNotEmpty()
//     @ManyToOne(type => CompetitionEntity, competition => competition.rounds)
//     competition: CompetitionEntity;

//     @IsNotEmpty()
//     @Column('integer')
//     roundNum: number;

//     @IsNotEmpty()
//     @Column('integer')
//     status: number;

//     @OneToMany(type => MatchEntity, match => match.round)
//     matches: MatchEntity[];
// }