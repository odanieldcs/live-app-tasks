import crypto from "crypto";

export default class Task {
  done?: boolean = false;
  updatedAt?: Date;

  constructor(
    readonly id: string,
    readonly title: string,
    readonly createdAt: Date,
    updatedAt?: Date
  ) {}

  static create(title: string) {
    const taskId = crypto.randomUUID();

    return new Task(taskId, title, new Date());
  }

  complete() {
    this.done = true;
    this.updatedAt = new Date();
  }
}
