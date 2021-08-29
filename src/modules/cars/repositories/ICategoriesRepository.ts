import { Category } from "../model/Category";

// DTO => Data Transfer Object => interface para fazer a transferencia dos parametros
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesReporitory {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesReporitory, ICreateCategoryDTO };
