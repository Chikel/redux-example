import { createSelector } from 'reselect';

const tasksSelector = state => state.tasks;

export const totalTime = createSelector(
  tasksSelector,
  (tasks) => tasks.reduce((acc, task)=> acc + task.value, 0)
);
