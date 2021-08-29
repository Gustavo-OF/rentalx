//  Para que o arquivo de rotas não fique criando ID's, ele foi passado para a classe necesária.
import { v4 as uuidv4 } from "uuid";

//  Crio a classe e os campos da classe.
class Category {
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
//  Exporto a classe para ser usada em outros lugares
export { Category };
