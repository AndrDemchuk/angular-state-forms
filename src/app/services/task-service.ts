import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Project',
      description: 'Finish the Angular project for the client by the end of the week.',
      status: 'in-progress',
      dueDate: new Date('2026-06-30'),
    },
    {
      id: 2,
      title: 'Prepare Presentation',
      description: 'Create slides for the upcoming team meeting.',
      status: 'todo',
      dueDate: new Date('2026-07-05'),
    },
    {
      id: 3,
      title: 'Submit Report',
      description: 'Submit the monthly report to the manager.',
      status: 'completed',
      dueDate: new Date('2026-06-25'),
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  };
  getTasksCount(): number {
    return this.tasks.length;
  }
}
