import { Alerts } from "./Model";
import * as $ from "jquery";

const m = new Alerts();
//const sjOb;

m.Messages = ['Great new feature'];
//m.Messages = 'Great new feature';
//m.Alerts = ['Great new feature'];//in typescript you cannot just add property to an object
//sjOb.Alerts = ['Great new feature'];//typescript defaults always back to javascript

export function DisplayAlerts(){

    $("#alerts").append(m.Messages.join());
}

DisplayAlerts();