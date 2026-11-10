import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private readonly taskService = inject(TaskService);
  protected readonly tasks = this.taskService.tasks;
  protected readonly taskCount = this.taskService.taskCount;

  protected toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }
}
