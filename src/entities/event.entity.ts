import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { TParTypeEvent } from "./typeEvent.entity"

@Entity({ schema: 'events', name: 'Event' })
export class Event {
    @PrimaryGeneratedColumn()
    id: number
    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50})
    created_by: string
    @UpdateDateColumn({nullable:true})
    update_at:Date
    @Column({ type:'varchar', length: 50,nullable:true})
    updated_by: string
    //---------------
    //---------------
    @Column({ type:'varchar', length: 500})
    title: string

    @Column("text")
    description: string

    @Column("text")
    objetive: string

    @Column("text")
    justification: string

    @Column("date")
    date_ini: Date

    @Column("date")
    date_end: Date

    @Column({ type:'varchar', length: 50,nullable:true})
    img_banner: string

    @Column({ type:"boolean", default:true})
    enabled: boolean

    @ManyToOne(() => TParTypeEvent, (tParTypeEvent) => tParTypeEvent.events,{nullable:false})
    tParTypeEvent: TParTypeEvent
}