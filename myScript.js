console.log('hello')

window.onload = function(){
    let script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"
    let body = document.body.appendChild(script)
}

import a from '';
import unused from '';
const c = require('./fdsafdsa');

var string = 'string';
let embedStr = `hello ${string}`
let number = 7;
const MY_CONSTANT = Symbol(1219147155);
let array = ["fdsaf",777, { fdsaf:'fdsafdas' }];
let [ a, b ] = [1,2];
const object = {
    name: 'tanphat',
    age: 67,
    [a]: 'computed key',
    nestedArray(){ console.log(6) },
    string
};
let { name, age } = object;
let bool = true

window.document.getElementById('fdsaf')
const arrowFunc = (name) => { console.log(name) };
function myFunction(used, unused) { console.log(used) }
myFunction();
arrowFunc();

class a {
    constructor(name){
        this.name = name;
    }
    static say(name){ console.log(name) }
}

export default class name extends Error {}

let instance = new name()






