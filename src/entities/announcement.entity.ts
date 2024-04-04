import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
@Entity({ schema: 'institutionalizations', name: 'announcement' })
export class Announcement {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column("text")
    description: string

    @Column("date")
    date_ini: Date

    @Column("date")
    date_end: Date

    @Column({ type:'varchar', length: 50})
    state: string

    @Column({ type:'varchar', length: 50})
    cite: string

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50})
    created_by: string
    @UpdateDateColumn({nullable:true})
    update_at:Date
    @Column({ type:'varchar', length: 50,nullable:true})
    updated_by: string
}