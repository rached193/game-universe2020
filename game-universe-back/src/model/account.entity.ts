import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { CompetitionEntity } from './competition.entity'

@Entity('account')
export class AccountEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        type: 'character varying',
        length: 320,
        nullable: false,
        unique: true})
    login: string

    @Column({
        type: 'character varying',
        length: 20,
        nullable: false})
    password: string

    @Column({
        type: 'character varying',
        length: 50,
        nullable: false})
    name: string

    @Column({
        type: 'boolean',
        nullable: false})
    enabled: boolean

    @OneToMany(type => CompetitionEntity, competition => competition.account)
    competitions: CompetitionEntity[]
}