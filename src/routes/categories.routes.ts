//  Importo a biblioteca de rotas do express.
import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

//  Instacio as rotas.
const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});
//  Crio a rota
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
