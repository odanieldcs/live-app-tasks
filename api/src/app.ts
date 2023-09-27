import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import KnexConnection from './application/infra/database/knex/KnexConnection';
import TaskController from './application/controller/TaskController';
import CategoryController from './application/controller/CategoryController';
import { CreateTask, CompleteTask } from './application/useCase/Task';
import {
	CreateCategory,
	UpdateCategory,
	ListCategory,
} from './application/useCase/Category';
import TaskRepository from './application/repository/TaskRepository';
import CategoryRepository from './application/repository/CategoryRepository';

const knexConnection = new KnexConnection();
const dbConnection = knexConnection.getInstance();

const taskRepository = new TaskRepository(dbConnection);
const categoryRepository = new CategoryRepository(dbConnection);
const createTask = new CreateTask(taskRepository);
const completeTask = new CompleteTask(taskRepository);

const categoryCreate = new CreateCategory(categoryRepository);
const updateCreate = new UpdateCategory(categoryRepository);
const listCreate = new ListCategory(categoryRepository);

const categoryController = new CategoryController(
	categoryCreate,
	listCreate,
	updateCreate
);
const taskController = new TaskController(createTask, completeTask);

// cria uma instancia do express
const app = express();

// defini alguns middlewares
app.use(express.json());
app.use(cors());

// defini as rotas
app.get('/', (req, res) => res.sendStatus(200));
app.post('/task', taskController.create.bind(taskController));
app.put('/task/:id/complete', taskController.complete.bind(taskController));

app.get('/category', categoryController.list.bind(categoryController));
app.post('/category', categoryController.create.bind(categoryController));
app.put('/category', categoryController.update.bind(categoryController));

export default app;
