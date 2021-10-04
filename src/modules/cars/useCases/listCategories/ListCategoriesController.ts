import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
        try {
            return response
                .status(200)
                .json(await listCategoriesUseCase.execute());
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListCategoriesController };
