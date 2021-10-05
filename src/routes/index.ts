import { Router } from "express";

//  Importo as rotas do arquivo de rotas
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

//  Comando para passsar apenas uma vez o nome do caminho, sem que precise ficar repitindo
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);


export { router };
