export function sayHello(name: string) {
	return `Hello, ${name}`;
}

/*
NOTE: this is the compiled JavaScript, assuming CommonJS module format
"use strict";
function sayHello(name) {
    return "Hello, " + name;
}
exports.sayHello = sayHello;
*/
