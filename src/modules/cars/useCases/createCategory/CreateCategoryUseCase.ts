import { ICategoriesReporitory } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe"
//  Interface da req
interface IRequestCreateCategory {
    name: string;
    description: string;
}
/**
 * Foi separado as classes de criar categoria, passsando a regra de negocio.
 * Principio de inversão de dependencia.
 */

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesReporitory) {}
    //  Cria o service e cria o método execute.
    async execute({ name, description }: IRequestCreateCategory): Promise<void> {
        const categoryAlredyExists = await this.categoryRepository.findByName(name);

        if (categoryAlredyExists) {
            //  Excessão, erro q vai ser lançado.
            throw new Error("Category alredy exists!");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
