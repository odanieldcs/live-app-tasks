import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import KnexConnection from "./application/infra/database/knex/KnexConnection";
import TaskController from "./application/controller/TaskController";
import { CreateTask, CompleteTask } from "./application/useCase/Task";
import TaskRepository from "./application/repository/TaskRepository";

const knexConnection = new KnexConnection();
const dbConnection = knexConnection.getInstance();

const taskRepository = new TaskRepository(dbConnection);
const createTask = new CreateTask(taskRepository);
const completeTask = new CompleteTask(taskRepository);
const taskController = new TaskController(createTask, completeTask);

// cria uma instancia do express
const app = express();

// defini alguns middlewares
app.use(express.json());
app.use(cors());

// defini as rotas
app.post("/task", taskController.create.bind(taskController));
app.put("/task/:id/complete", taskController.complete.bind(taskController));

// inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
