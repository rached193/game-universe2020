import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CompetitionEntity } from 'src/competition/entities/competition.entity';

@Entity('format')
export class FormatEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @Column('character varying', { length: 50, unique: true })
    name: string;

    @Column('boolean')
    enabled: boolean;

    @OneToMany(type => CompetitionEntity, competition => competition.format)
    competitions: CompetitionEntity[];
}