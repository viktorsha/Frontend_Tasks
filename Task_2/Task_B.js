function Robot(name) {
    this.name = name;
}

function add(op1, op2) {
    this.name = this.name || 'Human';
    return this.name + ' can count to ' + (op1 + op2);
}

const VOLTRON = new Robot('Voltron');
console.log(add(0, 1));
console.log(add.apply(VOLTRON, [1, 2]));
console.log(add.call(VOLTRON, 20, 30));