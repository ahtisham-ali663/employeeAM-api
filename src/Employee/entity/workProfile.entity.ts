import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Department } from "./department.entity";
import { Employee } from "./user.entity";


@Entity()

export class WorkProfile {
    @PrimaryGeneratedColumn()
    profileID: number

    @OneToOne(type => Employee)
    @JoinColumn()
    userID: Employee

    @ManyToOne(type => Department)
    department: Department

    @Column()
    designation: number

    @Column()
    workEmail: string

    @Column()
    supervisor: number

    @Column()
    hireDate: Date

    @Column()
    terminationDate: Date

}