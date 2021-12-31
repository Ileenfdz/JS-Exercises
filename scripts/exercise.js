export function isDivisible(n, x, y) { console.log(n % x == 0 && n % y == 0?true:false)}

export function greet(name){
    console.log("Hello, " + name + " how are you doing today?");
}

export function digitize(n) {
    let str = String(n);
    console.log(str.split('').map(Number).reverse());
}

export function maps(x){
    console.log(x.map(n => n * 2));
}