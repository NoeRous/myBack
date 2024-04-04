import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { InstitutionPosition } from "./institution_position.entity"
import { Announcement } from "./announcement.entity"
@Entity({ schema: 'institutionalizations', name: 'announcement_institution_position' })
export class AnnouncementInstitutionPosition {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => InstitutionPosition, (InstitutionPosition) => InstitutionPosition,{nullable:false})
    institutionPosition: InstitutionPosition

    @ManyToOne(() => Announcement, (Announcement) => Announcement,{nullable:false})
    announcement: Announcement

    @Column()
    number_available: number

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