import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const importCategoryUseCase = container.resolve(ImportCategoriesUseCase)
        const { file } = request;

        await importCategoryUseCase.execute(file);
        return response.status(200).send();
    }
}

export { ImportCategoriesController };
