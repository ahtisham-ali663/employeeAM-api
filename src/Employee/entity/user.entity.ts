import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Employee {
    @PrimaryGeneratedColumn()
    userID: number

    @Column()
    name:string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    photo: string

    @Column()
    gender: string

    @Column()
    birthday: Date

    @Column()
    address: string

    @Column()
    city: string

    @Column()
    country: string

    @Column()
    password: string

}