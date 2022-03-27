import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("User")
export class User{

    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    endereco: string

}