import * as actionTypes from './actionTypes';

export interface Action {
  type: string;
  payload?: any;
}

export function addTask(label: string) {
  return {type: actionTypes.addTask, payload: {label}}
}

export function toggleRunningTask(id) {
  return {type: actionTypes.toggleRunningTask, payload: {id}}
}

export function incrementTaskValue(id) {
  return {type: actionTypes.incrementTaskValue, payload: {id}}
}
