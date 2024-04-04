import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { InstitutionType } from "./institution_type.entity"
@Entity({ schema: 'public', name: 'institution' })
export class Institution {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => InstitutionType, (InstitutionType) => InstitutionType,{nullable:false})
    institution_type: InstitutionType

    @ManyToOne(() => Institution, (Institution) => Institution,{nullable:true})
    institution: Institution

    @Column({ type:'varchar', length: 200})
    name: string

    @Column("text")
    description: string

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