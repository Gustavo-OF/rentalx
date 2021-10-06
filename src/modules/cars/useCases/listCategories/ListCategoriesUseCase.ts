import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Category } from "../../entities/Category";
import { ICategoriesReporitory } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesReporitory) {}

    async execute(): Promise<Category[]> {

        const categoriesList = await this.categoryRepository.list();

        if (categoriesList.length <= 0) {
            throw new AppError("No results found.");
        }
        
        return categoriesList;
    }
}

export { ListCategoriesUseCase };
