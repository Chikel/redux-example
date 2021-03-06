"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, args) {
        var newVal = parseInt(value, 10);
        var minutes = value / 60;
        var seconds = value / 3600;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (value % 60 < 1) {
            return "00:" + value;
        }
        if (value % 600 < 1) {
            return "00:" + value;
        }
    };
    DurationPipe = __decorate([
        core_1.Pipe({
            name: 'duration'
        })
    ], DurationPipe);
    return DurationPipe;
}());
exports.DurationPipe = DurationPipe;
