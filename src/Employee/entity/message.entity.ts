import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Employee } from "./user.entity";


@Entity()

export class Message {
    @PrimaryGeneratedColumn()
    messageID: number

    @ManyToOne(type => Employee)
    recieverID: Employee

    @ManyToOne(type => Employee)
    senderID: Employee

    @Column()
    msgDate: Date

    @Column()
    subject: string

    @Column()
    body: string
}