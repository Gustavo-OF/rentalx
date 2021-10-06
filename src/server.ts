//  Importo o express
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
//  Importa o swagger, documentacao
import swaggerUi from "swagger-ui-express";
//  Importa a conexao com o banco
import "./database";
//  Importa o Container
import "./shared/container"
//  Importa as rotas
import { router } from "./routes";
//  Importa o arquivo Json com as informações da doc.
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";
//  Instancio o express.
const app = express();
app.use(express.json());
//  Rota para documentacao
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

//  Inicia o servidor
app.listen(3333, () => console.log("Server is running"));
