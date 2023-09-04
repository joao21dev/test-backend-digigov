import { Injectable } from "@nestjs/common";
import { Task } from "../../../domain/entities/task.entity";
import { TasksRepository } from "../../repositories/tasks.repository";

export class FindAllTasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  execute(): Task[] {
    const tasks = await this.tasksRepository.findAll();

    return { tasks };
  }
}
