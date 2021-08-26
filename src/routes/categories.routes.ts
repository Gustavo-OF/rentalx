//  Importo a biblioteca de rotas do express.
import { Router } from "express";

// Importo o repositorio.
import { CategoriesRepository } from "../repositories/CategoriesRepository";

//  Instancio o repositorio
const categoryRepository = new CategoriesRepository();

//  Instacio as rotas.
const categoriesRoutes = Router();
//  Crio a rota
categoriesRoutes.post("/", (request, response) => {
    //  Pego os parâmetros.
    const { name, description } = request.body;

    const categoryAlredyExists = categoryRepository.findByName(name);

    if (categoryAlredyExists) {
        return response.status(400).json({ error: "Category alredy exists!" });
    }

    categoryRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    return response.status(200).json(categoryRepository.list());
});

export { categoriesRoutes };
