import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator';

@Entity('competition')
export class CompetitionEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @IsNotEmpty()
    @Column('integer')
    account: number

    @IsNotEmpty()
    @Column('character varying', { length: 50, unique: true })
    name: string

    @Column('integer')
    format: number

    @Column('integer')
    bo: number

    @Column('integer')
    competitors: number

    @Column('integer')
    status: number
}