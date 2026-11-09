import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private readonly tasksService = inject(TaskService);
  protected readonly tasks = this.tasksService.getTasks();
  protected readonly taskCount = this.tasksService.getTasksCount();
}
