import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Employee } from "./user.entity";


@Entity()

export class Attendance {
    @PrimaryGeneratedColumn()
    attendanceID: number

    @ManyToOne(type => Employee)
    userID: Employee

    @Column()
    date : Date

    @Column({type: 'timestamp'})
    checkIn: Date

    @Column({type: 'timestamp'})
    checkOut: Date

    @Column()
    reason: string

    @Column()
    request: string

    @Column()
    workingHours: string
}