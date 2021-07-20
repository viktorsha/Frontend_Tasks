window.x = 1;
const CONTEXT = {x: 2};
const testThis = function (y) {
    console.log(`x=${this.x}, y=${y}`);
}


Function.prototype.apply = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('not function')
    }
    const func = this;
    context = context || window;
    args = args ? args[0] : [];
    context.func = func;
    const result = context.func(...args);
    delete context.func;
    return result;
}

const bind = function (func, context) {
    return function (parameter) {
        func.apply(context, [parameter]);
    }
}

testThis(100); // x=1, y=100
const boundFunction = bind(testThis, CONTEXT);
boundFunction(100); // x=2, y=100

