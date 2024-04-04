import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { PositionType } from "./position_type.entity"
import { Spatiality } from "./spatiality.entity"
@Entity({ schema: 'public', name: 'position' })
export class Position {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => PositionType, (PositionType) => PositionType,{nullable:false})
    position_type: PositionType

    @ManyToOne(() => Spatiality, (Spatiality) => Spatiality,{nullable:true})
    spatiality: Spatiality

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