import {initialState} from './store.service'
import * as actionTypes from "./actionTypes";
import {Action} from "./actions";

export function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.addTask:
      return Object.assign({}, state, {tasks: [...state.tasks, {id: state.tasks.length + 1, value: 0, label:action.payload.label}]});
    case actionTypes.toggleRunningTask:
      return Object.assign({}, state, {runningTaskId: state.runningTaskId === action.payload.id ? null : action.payload.id});
    case actionTypes.incrementTaskValue:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          return task.id === action.payload.id ? Object.assign({}, task, {value: task.value + 1}) : task
        })
      });
    default:
      return state;
  }
}

