import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Department {
    @PrimaryGeneratedColumn()
    departmentID:number

    @Column()
    departmentName: string
}