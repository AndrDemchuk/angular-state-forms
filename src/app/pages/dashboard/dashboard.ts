import { Component } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { TaskSummary } from '../../components/task-summary/task-summary';

@Component({
  selector: 'app-dashboard',
  imports: [TaskSummary, TaskList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard { }
