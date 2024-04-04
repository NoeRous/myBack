import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
@Entity({ schema: 'public', name: 'person' })
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 50})
    idendity_card: string

    @Column({ type:'varchar', length: 50})
    last_name: string

    @Column({ type:'varchar', length: 50, nullable:true})
    mothers_last_name: string

    @Column({ type:'varchar', length: 50, nullable:true})
    husband_last_name: string

    @Column({ type:'varchar', length: 50})
    firts_name: string

    @Column({ type:'varchar', length: 50, nullable:true})
    second_name: string

    @Column({ type:'varchar', length: 20})
    gender: string

    @Column({ type:'varchar', length: 50})
    email: string

    @Column("text")
    address: string

    @Column("text")
    phone: string

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