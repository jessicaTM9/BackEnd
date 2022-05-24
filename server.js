import express from "express";
import db from "./src/config/database.js";

import cursos from "./src/controllers/cursos.js";
import alunos from "./src/controllers/alunos.js";

const app = express();
app.use(express.json());
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

const routes = express.Router();
app.use(routes);

// Rotas da aplicação
routes.get("/", (req, res) => res.json({projeto: process.env.APP_NAME}));

// Cursos
routes.get("/cursos", cursos.obterTodos);
routes.post("/cursos", cursos.adicionarCurso);
routes.get("/cursos/:codigo", cursos.obterCurso);
routes.put("/cursos/:codigo", cursos.atualizarCurso);
routes.delete("/cursos/:codigo", cursos.excluirCurso);

// Alunos
routes.get("/alunos", alunos.obterTodos);
routes.post("/alunos", alunos.adicionarAluno);
routes.get("/alunos/:codigo", alunos.obterAluno);
routes.put("/alunos/:codigo", alunos.atualizarAluno);
routes.delete("/alunos/:codigo", alunos.excluirAluno);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));