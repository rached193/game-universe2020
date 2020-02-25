import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { AccountEntity } from 'src/account/account.entity';

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
    @Column('integer')
    format: number;

    @IsNotEmpty()
    @Column('integer')
    bo: number;

    @IsNotEmpty()
    @Column('integer')
    competitors: number;

    @IsNotEmpty()
    @Column('integer')
    status: number;
}