import {Injectable} from '@angular/core';
import {createStore, Store} from 'redux';
import {rootReducer} from "./reducers";
import {Action} from "./actions";

export interface Task {
  id: number;
  value: number;
  label: string;
}

export interface AppState {
  tasks: Task[];
  runningTaskId: number;
}

export const initialState: AppState = {
  tasks: [],
  runningTaskId: null
};

@Injectable()
export class StoreService {

  private store: Store<AppState>;

  constructor() {
    this.store = createStore(rootReducer);
  }

  public getState() {
    return this.store.getState();
  }

  public dispatch(action: Action) {
    this.store.dispatch(action);
  }

  public subscribe(listener) {
    return this.store.subscribe(listener);
  }
}
