import { ICategoriesReporitory } from "../../repositories/ICategoriesRepository";
//  Interface da req
interface IRequestCreateCategory {
    name: string;
    description: string;
}
/**
 * Foi separado as classes de criar categoria, passsando a regra de negocio.
 * Principio de inversão de dependencia.
 */
class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesReporitory) {}
    //  Cria o service e cria o método execute.
    execute({ name, description }: IRequestCreateCategory): void {
        const categoryAlredyExists = this.categoryRepository.findByName(name);

        if (categoryAlredyExists) {
            //  Excessão, erro q vai ser lançado.
            throw new Error("Category alredy exists!");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
