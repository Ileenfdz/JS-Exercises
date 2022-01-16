export function uniTotal(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  console.log("Total de " + str + " = " + sum);
}

export function elevatorDistance(array) {
  let distance = 0;
  let sum = 0;
  
  for(let i = 1;i < array.length;i++){
    sum = array[i] - array[i-1];
    distance += Math.abs(sum);
  }
  console.log("Total de distancia de un piso a otro en el recorrido " + array + " = " + distance);
}

export function addBinary(a,b) {
  console.log("The binary of the sum of " + a + " and " + b + " is " + (a + b).toString(2));
}