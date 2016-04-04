import * as SomeModule from "./module1";
import * as AnotherModule from "./module2";

console.log(SomeModule.sayHello("Willson"));
console.log(AnotherModule.add(1, 2, 3, 4));

/*
NOTE: this is the compiled JavaScript, assuming CommonJS module format
"use strict";
var SomeModule = require("./module1");
var AnotherModule = require("./module2");
console.log(SomeModule.sayHello("Willson"));
console.log(AnotherModule.add(1, 2, 3, 4));
*/
