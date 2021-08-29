import { Specification } from "../../model/Specifications";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specification: Specification[];
    private static INSTANCE: SpecificationRepository;
    private constructor() {
        this.specification = [];
    }

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        //  Cria o objeto dentro da constante specification
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        //  insere no array
        this.specification.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specification.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationRepository };
