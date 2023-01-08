import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Auths")
export class Auth {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 60 })
    username: string;

    @Column()
    password: string;
}
