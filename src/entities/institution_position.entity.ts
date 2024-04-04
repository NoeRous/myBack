import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Institution } from "./institution.entity"
import { Position } from "./position.entity"
@Entity({ schema: 'public', name: 'institution_position' })
export class InstitutionPosition {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Institution, (Institution) => Institution,{nullable:false})
    institution: Institution

    @ManyToOne(() => Position, (Position) => Position,{nullable:false})
    position: Position

    @Column({ type:"boolean", default:true})
    enabled: boolean

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