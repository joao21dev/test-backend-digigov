import { Injectable } from "@nestjs/common";
import { Task } from "../../../domain/entities/task.entity";
import { CreateTaskDto } from "../../../domain/dtos/create-task.dto";
import { TasksRepository } from "../../repositories/tasks.repository";

export class CreateTaskService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  execute(createTaskDto: CreateTaskDto): Task {
    const task = await this.tasksRepository.create(createTaskDto);

    return { task };
  }
}
