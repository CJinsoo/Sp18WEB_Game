"use strict";
exports.__esModule = true;
var Model_1 = require("./Model");
var $ = require("jquery");
var m = new Model_1.Alerts();
//const sjOb;
m.Messages = ['Great new feature'];
//m.Messages = 'Great new feature';
//m.Alerts = ['Great new feature'];//in typescript you cannot just add property to an object
//sjOb.Alerts = ['Great new feature'];//typescript defaults always back to javascript
function DisplayAlerts() {
    $("#alerts").append(m.Messages.join());
}
exports.DisplayAlerts = DisplayAlerts;
DisplayAlerts();
