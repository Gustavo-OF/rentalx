//  Importo a classe de categorias de carro. Toda classe que tem que ser usada como default
//  Utiliza as chaves.
import { Category } from "../../model/Category";
import {
    ICategoriesReporitory,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

//  singleton

//  Repositories são arquivos responsáveis por toda a interação com o banco de dados
class CategoriesRepository implements ICategoriesReporitory {
    //  Crio o array de categorias, informando que o tipo dele é Category (model)
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
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
