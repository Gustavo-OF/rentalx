import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid";

@Entity("specifications")
class Specification {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
    //  Crio o construtor, informando que se o ID vier vazio, ele é gerado aqui.
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification };
