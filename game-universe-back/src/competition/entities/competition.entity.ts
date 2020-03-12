import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { AccountEntity } from 'src/account/account.entity';
import { FormatEntity } from 'src/competition/entities/format.entity';
import { BoEntity } from 'src/competition/entities/bo.entity';
import { CompetitorEntity } from 'src/competition/entities/competitor.entity';
import { RoundEntity } from 'src/competition/entities/round.entity';

export enum StatusCompetition {
    CREATE = 1, // La competición está siendo configurada
    CONFIG = 2, // Los participantes están siendo configurados
    PAIRING = 3, // Se están configurando los próximos enfrentamientos
    ACTIVE = 4, // La competición está activa
    FINISHED = 5 // La competición ha finalizado
  }

@Entity('competition')
export class CompetitionEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @IsNotEmpty()
    @ManyToOne(type => AccountEntity, account => account.competitions)
    account: AccountEntity;

    @IsNotEmpty()
    @Column('character varying', { length: 100, unique: true })
    name: string;

    @IsNotEmpty()
    @ManyToOne(type => FormatEntity, format => format.competitions)
    format: FormatEntity;

    @IsNotEmpty()
    @ManyToOne(type => BoEntity, bo => bo.competitions)
    bo: BoEntity;

    @IsNotEmpty()
    @Column('integer')
    competitorsNum: number;

    @IsNotEmpty()
    @Column('integer')
    status: StatusCompetition;

    @OneToMany(type => CompetitorEntity, competitor => competitor.competition)
    competitors: CompetitorEntity[];

    @OneToMany(type => RoundEntity, round => round.competition)
    rounds: RoundEntity[];
}