import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Local {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    cep: string;

    @Column()
    patio: string;

    @Column()
    city: string;

    @Column()
    stateAcronym: string;

    @Column()
    neighborhood: string;

    @Column()
    visited: number;

    @CreateDateColumn()
    createdAt: string;
}
