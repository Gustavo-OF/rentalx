import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
    handle(request: Request, response: Response): Response {
        try {
            return response
                .status(200)
                .json(this.listCategoriesUseCase.execute());
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListCategoriesController };
