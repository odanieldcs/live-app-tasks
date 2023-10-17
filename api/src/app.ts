import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import KnexConnection from './infra/database/knex/KnexConnection';
import {
	RepositoryFactory,
	UseCaseFactory,
	ControllerFactory,
} from './application/factory';
import Router from './infra/http/Routes';

const knexConnection = new KnexConnection();
const dbConnection = knexConnection.getInstance();

// declarar uma instancia da minha RepositoryFactory
const repositoryFactory = new RepositoryFactory(dbConnection);

// declarar uma instancia da minha UseCaseFactory
const useCaseFactory = new UseCaseFactory(repositoryFactory.repositories());

// declar uma instancia da minha ControllerFactory
const controllerFactory = new ControllerFactory(useCaseFactory);

// defini as rotas enviando a instancia da minha ControllerFactory
const router = new Router(controllerFactory);

// cria uma instancia do express
const app = express();

// defini alguns middlewares
app.use(express.json());
app.use(cors());
app.use(router.routes());

export default app;
