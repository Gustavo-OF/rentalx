import { v4 as uuidv4 } from "uuid";

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at: Date;
    //  Crio o construtor, informando que se o ID vier vazio, ele é gerado aqui.
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification };
