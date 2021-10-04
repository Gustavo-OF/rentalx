import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequestCreateSpecification {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationRepository) {}
    async execute({ name, description }: IRequestCreateSpecification): Promise<void> {
        const specification = await this.specificationRepository.findByName(name);

        if (specification) {
            throw new Error("Specification already exists");
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
