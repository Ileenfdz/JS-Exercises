export function basicOp(operation, value1, value2){
    console.log(eval(value1+operation+value2));
}

export function reverseWords(str) {
    console.log(str.split(' ').reverse().join(' '));
}