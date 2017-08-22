import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import Base from './base'

@Entity('user')
export class User extends Base {
    @PrimaryGeneratedColumn() id: number
    @Column() email: string
    @Column() password: string

    roles: string[]
}
