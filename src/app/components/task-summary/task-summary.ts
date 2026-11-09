import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-summary',
  imports: [],
  templateUrl: './task-summary.html',
  styleUrl: './task-summary.css',
})
export class TaskSummary {
  private readonly taskService = inject(TaskService);
  protected readonly totalTasks = this.taskService.getTasksCount();
}
