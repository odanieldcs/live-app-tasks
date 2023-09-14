// recebe o request
// chama o useCase
// responde o request
import { Request, Response } from "express";
import { CreateTask, CompleteTask } from "../useCase/Task";

export default class TaskController {
  constructor(
    readonly createTask: CreateTask,
    readonly completeTask: CompleteTask
  ) {}

  async create(req: Request, res: Response) {
    const { title } = req.body;
    const task = await this.createTask.execute(title);

    res.status(200).json({
      task: task,
    });
  }

  async complete(req: Request, res: Response) {
    const { id: taskId } = req.params;
    const task = await this.completeTask.execute(taskId);

    res.status(201).json({ task: task });
  }
}
