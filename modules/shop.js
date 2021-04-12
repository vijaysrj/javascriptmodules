
import {manufacture} from '/factory.js';
import {shipitem} from '/courier.js';
export function order(){

console.log("Ordering");
    manufacture("pencil");
    shipitem("pencil");
}