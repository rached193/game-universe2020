// import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { IsNotEmpty } from 'class-validator';
// import { CompetitionEntity } from 'src/model/competition.entity';

// @Entity('bo')
// export class BoEntity {
//     @PrimaryGeneratedColumn('increment')
//     id: number;

//     @IsNotEmpty()
//     @Column('character varying', { length: 50, unique: true })
//     name: string;

//     @IsNotEmpty()
//     @Column('integer')
//     games: number;

//     @Column('boolean')
//     enabled: boolean;

//     @OneToMany(type => CompetitionEntity, competition => competition.bo)
//     competitions: CompetitionEntity[];
// }