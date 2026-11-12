import { Component } from '@angular/core';
import { TaskForm } from '../../components/task-form/task-form';

@Component({
  selector: 'app-new-task',
  imports: [TaskForm],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask { }
