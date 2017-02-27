"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var redux_1 = require('redux');
var reducers_1 = require("./reducers");
exports.initialState = {
    tasks: [],
    runningTaskId: null
};
var StoreService = (function () {
    function StoreService() {
        this.store = redux_1.createStore(reducers_1.rootReducer);
    }
    StoreService.prototype.getState = function () {
        return this.store.getState();
    };
    StoreService.prototype.dispatch = function (action) {
        this.store.dispatch(action);
        console.log("dispatching...");
    };
    StoreService.prototype.subscribe = function (listener) {
        return this.store.subscribe(listener);
    };
    StoreService = __decorate([
        core_1.Injectable()
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
