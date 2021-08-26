//  Importo a classe de categorias de carro. Toda classe que tem que ser usada como default
//  Utiliza as chaves.
import { Category } from "../model/Category";
// DTO => Data Transfer Object => interface para fazer a transferencia da rota para a model
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

//  Repositories são arquivos responsáveis por toda a interação com o banco de dados
class CategoriesRepository {
    //  Crio o array de categorias, informando que o tipo dele é Category (model)
    private categories: Category[];

    constructor() {
        this.categories = [];
    }
    //  Retono Void
    create({ name, description }: ICreateCategoryDTO): void {
        //  Instancio a classe de categoria.
        const category = new Category();
        //  Object.assign serve para preencher o array de categorias de uma forma mais limpa.
        //  Informo o array e os campos e coloco para dentro do array.
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
}

export { CategoriesRepository };
