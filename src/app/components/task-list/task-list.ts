import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/task-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
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

  protected readonly errorMessage = this.taskService.errorMessage;

  protected deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }
}
