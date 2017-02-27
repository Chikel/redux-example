"use strict";
var actionTypes = require('./actionTypes');
function addTask(label) {
    return { type: actionTypes.addTask, payload: { label: label } };
}
exports.addTask = addTask;
function toggleRunningTask(id) {
    return { type: actionTypes.toggleRunningTask, payload: { id: id } };
}
exports.toggleRunningTask = toggleRunningTask;
function incrementTaskValue(id) {
    return { type: actionTypes.incrementTaskValue, payload: { id: id } };
}
exports.incrementTaskValue = incrementTaskValue;
