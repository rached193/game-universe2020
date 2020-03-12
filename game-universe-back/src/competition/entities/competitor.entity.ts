import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CompetitionEntity } from 'src/competition/entities/competition.entity';

@Entity('competitor')
export class CompetitorEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @ManyToOne(type => CompetitionEntity, competition => competition.competitors)
    competition: CompetitionEntity;

    @IsNotEmpty()
    @Column('character varying', { length: 50, unique: true })
    name: string;
}