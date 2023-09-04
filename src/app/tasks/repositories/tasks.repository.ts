import { Task } from "../../../domain/entities/task.entity";
import { CreateTaskDto } from "../../../domain/dtos/create-task.dto";

export abstract class TasksRepository {
  abstract findAll(): Task[];
  abstract create(task: CreateTaskDto);
}
