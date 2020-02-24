import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { CompetitionEntity } from './competition.entity'

@Entity('format')
export class FormatEntity {
    @PrimaryColumn('integer')
    id: number

    @Column({
        type: 'character varying',
        length: 50,
        nullable: false,
        unique: true
    })
    name: string

    @Column({
        type: 'boolean',
        nullable: false
    })
    enabled: boolean

    @OneToMany(type => CompetitionEntity, competition => competition.account)
    competitions: CompetitionEntity[]
}