export function numberToString(num) {
    console.log(num.toString());
}

export function removeChar(str){console.log(str.slice(1,-1))}

export function findSmallestInt(args) {
    let small = 0;
    for(let i = 0;i < args.length;i++){
      if(args[i] <= args[0]){
        args[0]  = args[i];    
        small = args[i];
      }
    }
    console.log(small);
}

export function summation(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}