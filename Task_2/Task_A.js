window.x = 1
const context = {x: 2};
const testThis = function (y) {
    console.log(`x=${this.x}, y=${y}`)
}
const bind = function (func, context) {
    return function (parameter) {
        func.apply(context, [parameter])
    }
}
testThis(100); // x=1, y=100
const boundFunction = bind(testThis, context);
boundFunction(100); // x=2, y=100

