//  Importo o express
import express from "express";

import { router } from "./routes";
//  Instancio o express.
const app = express();

app.use(router);

//  Inicia o servidor
app.listen(3333, () => console.log("Server is running"));
