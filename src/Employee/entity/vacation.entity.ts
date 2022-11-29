import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Employee } from "./user.entity";


@Entity()

export class Vacation {
    @PrimaryGeneratedColumn()
    VacationID: number

    @ManyToOne(type => Employee)
    userID: Employee

    @Column()
    type : string

    @Column()
    reason: string

    @Column()
    startDate: Date

    @Column()
    endDate: Date
}