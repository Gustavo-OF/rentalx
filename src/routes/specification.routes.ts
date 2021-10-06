import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

//  use para verificar se o usuario esta autenticado.
specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
