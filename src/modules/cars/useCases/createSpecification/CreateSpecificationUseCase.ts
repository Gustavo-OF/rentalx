import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequestCreateSpecification {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}
    execute({ name, description }: IRequestCreateSpecification): void {
        const specification = this.specificationRepository.findByName(name);
        if (specification) {
            throw new Error("Specification already exists");
        }
        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
