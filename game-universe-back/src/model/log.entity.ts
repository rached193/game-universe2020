import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('log')
export class LogEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        type: 'character',
        length: 1
    })
    log_type: string

    @Column({
        type: 'text'
    })
    log_info: string

    @Column({
        type: 'timestamp without time zone',
        nullable: false
    })
    log_time: string
}