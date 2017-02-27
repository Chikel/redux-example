import {Component, Input, EventEmitter, Output} from '@angular/core';

import {Task} from '../store/store.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Output() taskToggled = new EventEmitter<number>();
  @Input() task: Task;
  @Input() runningTaskId: number;

  constructor() {
  }

  public isTaskRunning(): boolean {
    return this.runningTaskId === this.task.id;
  }

  public toggleTask() {
    this.taskToggled.emit(this.task.id);
  }
}
