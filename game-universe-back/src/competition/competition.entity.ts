import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('competition')
export class CompetitionEntity {
    @PrimaryGeneratedColumn('serial')
    id: number

    @Column('integer')
    account: number

    @Column('character varying', { length: 50, unique: true})
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