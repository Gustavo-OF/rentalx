//  Importo a classe de categorias de carro. Toda classe que tem que ser usada como default
//  Utiliza as chaves.
import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
    ICategoriesReporitory,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";


//  Repositories são arquivos responsáveis por toda a interação com o banco de dados
class CategoriesRepository implements ICategoriesReporitory {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        })
        
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };
