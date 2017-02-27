import {Component} from '@angular/core';
import {StoreService, Task} from "./store/store.service";
import * as actions from "./store/actions";
import * as selectors from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public taskLabel: string;
  public currentTasks: Task[];
  public runningTaskId: number;
  public totalTime: number = 0;

  private intervalRef: any;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.subscribe(() => {
      const currentState = this.storeService.getState();
      this.currentTasks = currentState.tasks;
      this.runningTaskId = currentState.runningTaskId;
      this.runningTaskId ? this.runTask() : this.stopTask();
      this.totalTime = selectors.totalTime(currentState);
    });
  }

  public notifyTaskAdded() {
    if (this.taskLabel) {
      this.storeService.dispatch(actions.addTask(this.taskLabel));
      this.taskLabel = "";
    }
  }

  public notifyTaskToggled(taskId: number) {
    this.storeService.dispatch(actions.toggleRunningTask(taskId));
  }

  public runTask() {
    if (this.intervalRef) {
      return;
    }

    this.intervalRef = setInterval(() => {
      this.storeService.dispatch(actions.incrementTaskValue(this.runningTaskId));
    }, 1000);
  }

  private stopTask() {
    clearInterval(this.intervalRef);
    this.intervalRef = null;
  }
}
