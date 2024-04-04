import { Entity, Column, PrimaryColumn} from "typeorm"
@Entity({ schema: 'parametrics', name: 'position_type' })
export class PositionType {
    @PrimaryColumn()
    id: number
    @Column({ type:'varchar', length: 100})
    name: string

    @Column("text")
    description: string
}