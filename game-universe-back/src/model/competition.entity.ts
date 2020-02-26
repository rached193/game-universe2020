// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
// import { IsNotEmpty } from 'class-validator';
// import { AccountEntity } from 'src/account/account.entity';
// import { FormatEntity } from 'src/model/format.entity';
// import { BoEntity } from 'src/model/bo.entity';
// import { RoundEntity } from 'src/competition/round.entity';
// import { CompetitorEntity } from 'src/model/competitor.entity';

// @Entity('competition')
// export class CompetitionEntity {
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     @IsNotEmpty()
//     @ManyToOne(type => AccountEntity, account => account.competitions)
//     account: AccountEntity;

//     @IsNotEmpty()
//     @Column('character varying', { length: 100, unique: true })
//     name: string;

//     @IsNotEmpty()
//     @ManyToOne(type => FormatEntity, format => format.competitions)
//     format: number;

//     @IsNotEmpty()
//     @ManyToOne(type => BoEntity, bo => bo.competitions)
//     bo: number;

//     @IsNotEmpty()
//     @Column('integer')
//     competitors_num: number;

//     @IsNotEmpty()
//     @Column('integer')
//     status: number;

//     @OneToMany(type => RoundEntity, round => round.competition)
//     rounds: RoundEntity[];

//     @OneToMany(type => CompetitorEntity, competitor => competitor.competition)
//     competitors: CompetitorEntity[];
// }