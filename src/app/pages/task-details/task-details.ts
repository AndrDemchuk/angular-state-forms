import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly taskService = inject(TaskService);
  // Read the :id route param directly; it is available when the component is created
  protected readonly task = this.taskService.getTaskById(
    Number(this.route.snapshot.paramMap.get('id')),
  );
}

