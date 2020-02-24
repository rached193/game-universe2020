// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
// import { IsNotEmpty } from 'class-validator';
// import { AccountEntity } from './account.entity';
// import { FormatEntity } from './format.entity';
// import { BoEntity } from './bo.entity';

// @Entity('competition')
// export class CompetitionEntity {
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     /*@IsNotEmpty()
//     @Column('integer')
//     account: number*/
//     @ManyToOne(type => AccountEntity, account => account.competitions)
//     account: AccountEntity;

//     @IsNotEmpty()
//     @Column('character varying', { length: 50, unique: true })
//     name: string;

//     /*@Column('integer')
//     format: number*/
//     @ManyToOne(type => FormatEntity, format => format.competitions)
//     format: FormatEntity;

//     /*@Column('integer')
//     bo: number*/
//     @ManyToOne(type => BoEntity, bo => bo.competitions)
//     bo: BoEntity;

//     @Column('integer')
//     competitors: number;

//     @Column('integer')
//     status: number;
// }