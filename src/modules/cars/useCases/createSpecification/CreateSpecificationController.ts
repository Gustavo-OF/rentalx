import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
        const { name, description } = request.body;
        try {
            await createSpecificationUseCase.execute({ name, description });
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
        return response.status(201).send();
    }
}

export { CreateSpecificationController };
