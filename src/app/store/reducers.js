"use strict";
var store_service_1 = require('./store.service');
var actionTypes = require("./../actionTypes");
function rootReducer(state, action) {
    if (state === void 0) { state = store_service_1.initialState; }
    switch (action.type) {
        case actionTypes.addTask:
            return Object.assign({}, state, { tasks: state.tasks.concat([{ id: state.tasks.length + 1, value: 0, label: action.payload.label }]) });
        case actionTypes.toggleRunningTask:
            return Object.assign({}, state, { runningTaskId: state.runningTaskId === action.payload.id ? null : action.payload.id });
        case actionTypes.incrementTaskValue:
            return Object.assign({}, state, {
                tasks: state.tasks.map(function (task) {
                    return task.id === action.payload.id ? Object.assign({}, task, { value: task.value + 1 }) : task;
                })
            });
        default:
            return state;
    }
}
exports.rootReducer = rootReducer;
