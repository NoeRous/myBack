import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Person } from "./person.entity"
@Entity({ schema: 'institutionalizations', name: 'applicant' })
export class Applicant {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Person, (Person) => Person,{nullable:false})
    person: Person

    @Column({ type:'varchar', length: 20})
    rda_number: string

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