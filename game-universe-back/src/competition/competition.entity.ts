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
    @Column('character varying', { length: 100, unique: true })
    name: string

    @IsNotEmpty()
    @Column('integer')
    format: number

    @IsNotEmpty()
    @Column('integer')
    bo: number

    @IsNotEmpty()
    @Column('integer')
    competitors: number

    @IsNotEmpty()
    @Column('integer')
    status: number
}