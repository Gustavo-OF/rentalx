import { Category } from "../entities/Category";

// DTO => Data Transfer Object => interface para fazer a transferencia dos parametros
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesReporitory {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesReporitory, ICreateCategoryDTO };
