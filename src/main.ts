import { InMemoryTasksRepository } from "./infra/in-memory-tasks.repository.ts";

const tasksRepository = new InMemoryTasksRepository();

tasksRepository.create({ title: "Estudar", isCompleted: true });
tasksRepository.create({ title: "Academia", isCompleted: true });

console.log(tasksRepository.findAll());
