import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specifications";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        });

        this.repository.save(specification);
    }
    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification
    }
}

export { SpecificationsRepository };
