import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import Base from './base'

@Entity('photo')
export class Photo extends Base {
    @PrimaryGeneratedColumn() id: number
    @Column({ length: 500 })
    name: string
    @Column() description: string
    @Column() fileName: string
    @Column('int') views: number
    @Column() isPublished: boolean
}
