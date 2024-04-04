import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Applicant } from "./applicant.entity"
import { AnnouncementInstitutionPosition } from "./announcement_institution_position.entity"
@Entity({ schema: 'institutionalizations', name: 'postulation' })
export class Postulation {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Applicant, (Applicant) => Applicant,{nullable:false})
    applicant: Applicant

    @ManyToOne(() => AnnouncementInstitutionPosition, (AnnouncementInstitutionPosition) => AnnouncementInstitutionPosition,{nullable:false})
    announcementInstitutionPosition: AnnouncementInstitutionPosition

    @Column({ type:'varchar', length: 20})
    voucher: string

    @Column({ type:'varchar', length: 200})
    voucher_img: string

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