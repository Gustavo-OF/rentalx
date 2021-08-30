//  Importo o express
import express from "express";
//  Importa o swagger, documentacao
import swaggerUi from "swagger-ui-express";

//  Importa as rotas
import { router } from "./routes";
//  Importa o arquivo Json com as informações da doc.
import swaggerFile from "./swagger.json";
//  Instancio o express.
const app = express();
app.use(express.json());
//  Rota para documentacao
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

//  Inicia o servidor
app.listen(3333, () => console.log("Server is running"));
