import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CompetitionEntity } from 'src/competition/entities/competition.entity';

@Entity('account')
export class AccountEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @Column('character varying', { length: 320, unique: true })
  login: string;

  @IsNotEmpty()
  @Column('character varying', { length: 20, unique: true })
  password: string;

  @IsNotEmpty()
  @Column('character varying', { length: 50, unique: true })
  name: string;

  @Column('boolean')
  enabled: boolean;

  @OneToMany(type => CompetitionEntity, competition => competition.account)
  competitions: CompetitionEntity[];
}
