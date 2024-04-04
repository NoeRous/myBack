import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({ schema: 'parametrics', name: 'institution_type' })
export class InstitutionType {
    @PrimaryColumn()
    id: number
    @Column({ type:'varchar', length: 200})
    name: string

    @Column("text")
    description: string

}