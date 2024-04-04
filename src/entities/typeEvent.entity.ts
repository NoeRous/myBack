import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from "typeorm"
import { Event } from "./event.entity"

@Entity({ schema: 'parametrics', name: 'TParTypeEvent' })
export class TParTypeEvent {
    @PrimaryColumn()
    id: number
    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50})
    created_by: string
    @UpdateDateColumn()
    update_at:Date
    @Column({ type:'varchar', length: 50})
    updated_by: string
    //---------------
    //---------------
    @Column({ type:'varchar', length: 500})
    title: string

    @Column({ type:"boolean", default:true})
    enabled: boolean
    @OneToMany(() => Event, (event) => event.tParTypeEvent)
    events: Event[]
}