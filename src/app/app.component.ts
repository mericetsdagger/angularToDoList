import { Component } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTemplate';

  getFooter(): string {
    return 'footer string';
  }

  clearTasks(): void {
    this.tasks = [];
    alert("zadania zostaly wyczyszczone");
  }

  tasks: Task[] = [
    {
      name: 'task1',
      deadline: '2022-01-16',
      done: false
    },
    {
      name: 'task2',
      deadline: '2022-02-01',
      done: false
    }
  ];
}
