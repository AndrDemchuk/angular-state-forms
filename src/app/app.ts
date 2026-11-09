import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskSummary } from './components/task-summary/task-summary';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, TaskSummary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}
