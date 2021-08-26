//  Importo o express
import express from "express";

//  Importo as rotas do arquivo de rotas
import { categoriesRoutes } from "./routes/categories.routes";

//  Instancio o express.
const app = express();
//  Comando para que o express consiga entender parâmetros JSON da requisição.
app.use(express.json());
//  Comando para passsar apenas uma vez o nome do caminho, sem que precise ficar repitindo
app.use("/categories", categoriesRoutes);
//  Inicia o servidor
app.listen(3333, () => console.log("Server is running"));
