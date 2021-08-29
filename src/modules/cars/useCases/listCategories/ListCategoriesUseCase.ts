import { Category } from "../../model/Category";
import { ICategoriesReporitory } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoriesReporitory) {}
    execute(): Category[] {
        const categoriesList = this.categoryRepository.list();
        if (categoriesList.length <= 0) {
            throw new Error("No results found.");
        }
        return categoriesList;
    }
}

export { ListCategoriesUseCase };
