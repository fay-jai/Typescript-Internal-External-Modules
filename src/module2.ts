namespace InternalModule {
	export function add(...args: number[]): number {
		return args.reduce((acc, cur) => acc + cur, 0);
	}
}

export = InternalModule;

/*
NOTE: this is the compiled JavaScript, assuming CommonJS module format
"use strict";
var InternalModule;
(function (InternalModule) {
    function add() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return args.reduce(function (acc, cur) { return acc + cur; }, 0);
    }
    InternalModule.add = add;
})(InternalModule || (InternalModule = {}));
module.exports = InternalModule;
*/
