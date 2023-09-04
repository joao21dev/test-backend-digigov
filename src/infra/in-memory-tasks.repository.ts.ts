import { Task } from "../domain/entities/task.entity";
import { TasksRepository } from "../app/tasks/repositories/tasks.repository";
import { CreateTaskDto } from "../domain/dtos/create-task.dto";

export class InMemoryTasksRepository implements TasksRepository {
  private tasks: Task[] = [];

  findAll() {
    return this.tasks;
  }

   create(data: CreateTaskDto) {
    const task = this.tasks.push(data);

    return task;
  }
}
