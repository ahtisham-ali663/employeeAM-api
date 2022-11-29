import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Employee } from "./user.entity";


@Entity()

export class Break {
    @PrimaryGeneratedColumn()
    breakID: number

    @ManyToOne(type => Employee)
    userID: Employee

    @Column()
    date : Date

    @Column({type: 'timestamp'})
    startTime: Date

    @Column({type: 'timestamp'})
    endTime: Date
}